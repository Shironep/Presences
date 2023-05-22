const presence = new Presence({
		clientId: "1101840416866844672",
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);

const enum Assets {
	Logo = "https://i.imgur.com/CyVxys5.jpg",
	Home = "https://i.imgur.com/i2EEGId.jpg",
	Emitting = "https://i.imgur.com/TNrq2vU.jpg",
	Login = "https://i.imgur.com/aY4bjzh.jpg",
	Register = "https://i.imgur.com/hdtAwWr.jpg",
	Settings = "https://i.imgur.com/T91Uhm5.jpg",
	Preview = "https://i.imgur.com/1RLd82M.jpg",
}

let iFrameVideo: boolean,
	currentTime: number,
	duration: number,
	paused: boolean,
	playback: boolean,
	reproductor: string;

presence.on(
	"iFrameData",
	(data: {
		iframeVideo: {
			duration: number;
			iFrameVideo: boolean;
			currTime: number;
			paused: boolean;
			reproductor: string;
		};
	}) => {
		playback = data.iframeVideo !== null;
		if (playback) {
			({ iFrameVideo, paused, duration, reproductor } = data.iframeVideo);
			currentTime = data.iframeVideo.currTime;
		}
	}
);

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
			largeImageKey: Assets.Logo,
			startTimestamp: browsingTimestamp,
		},
		{ href, pathname } = document.location;

	if (pathname === "/") {
		presenceData.smallImageKey = Assets.Home;
		presenceData.smallImageText = "Página de inicio";
		presenceData.details = "Viendo la página de inicio";
	} else if (pathname === "/emitiendo") {
		presenceData.smallImageKey = Assets.Emitting;
		presenceData.smallImageText = "En Emisión";
		presenceData.details = "Explorando animes en emisión";
	} else if (pathname.startsWith("/ajustes")) {
		if (pathname === "/ajustes") {
			presenceData.smallImageKey = Assets.Settings;
			presenceData.smallImageText = "Ajustes";
			presenceData.details = "Personalizando uwu";
		} else if (pathname === "/ajustes/privacidad") {
			presenceData.details = "Informandose 🧐";
			presenceData.state = "Politicas de privacidad";
		}
	} else if (pathname.startsWith("/auth/")) {
		if (pathname === "/auth/iniciar-sesion") {
			presenceData.smallImageKey = Assets.Login;
			presenceData.smallImageText = "Inicio de sesión";
			presenceData.details = "Iniciando sesión";
		} else if (pathname === "/auth/registrarse") {
			presenceData.smallImageKey = Assets.Register;
			presenceData.smallImageText = "Registro de usuario";
			presenceData.details = "¡Creando nueva cuenta!";
		}
	} else if (pathname.startsWith("/serie/")) {
		presenceData.smallImageKey = Assets.Preview;
		presenceData.smallImageText = "Serie";
		presenceData.details = `A punto de ver ${
			document.querySelector("h1").textContent
		}`;
		presenceData.state = `Temporada ${
			document.querySelector("#season_id").textContent
		}`;
		presenceData.buttons = [
			{
				label: "¡Ver También!",
				url: href,
			},
		];
	} else if (pathname.startsWith("/buscar")) {
		presenceData.smallImageKey = Assets.Search;
		presenceData.smallImageText = "Buscador";
		presenceData.details = "Buscando";
		presenceData.state = document.querySelector<HTMLInputElement>(
			"div.search-bar > input[type=text]"
		).value;
	} else if (pathname.startsWith("/watch/")) {
		const title = document.querySelector(
				".reproductor-container > div:nth-child(2) > div.reproductor-centralizer > div > a"
			).textContent,
			cap = pathname.split("/")[2].split("-")[2];

		presenceData.details = `Viendo ${title}`;

		if (iFrameVideo && !isNaN(duration)) {
			presenceData.smallImageKey = paused ? Assets.Pause : Assets.Play;
			presenceData.smallImageText = paused ? "Pausado" : "Reproduciendo";
			[, presenceData.endTimestamp] = presence.getTimestamps(
				Math.floor(currentTime),

				Math.floor(duration)
			);

			presenceData.details = title ?? "Titulo no encontrado.";
			presenceData.state = paused
				? `Cap. ${cap}｜Pausado`
				: `Cap. ${cap}｜Reproduciendose desde: ${reproductor}`;
		}

		if (paused) {
			delete presenceData.startTimestamp;
			delete presenceData.endTimestamp;
		}

		if (title) {
			presenceData.buttons = [
				{
					label: "Ver Episodio",
					url: href,
				},
				{
					label: "Ver serie",
					url: document.querySelector<HTMLAnchorElement>(
						".reproductor-container > div:nth-child(2) > div.reproductor-centralizer > div > a"
					).href,
				},
			];
		}
	}

	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
