const presence = new Presence({ clientId: "1066889761928777848" }),
	browsingTimestamp = Math.floor(Date.now() / 1000),
	assets = {
		logo: "https://i.imgur.com/Ldqj50W.png",
		unknownGame: "https://i.imgur.com/cnczdmM.png",
	},
	getGame = async (id: number) => {
		const get = await fetch(
				"https://raw.githubusercontent.com/Shironep/Boosteroid/main/games.json"
			),
			body = await get.json();
		return body[id];
	},
	{ pathname, hostname } = document.location;

presence.on("UpdateData", async () => {
	let presenceData: PresenceData = {
		largeImageKey: assets.logo,
		startTimestamp: browsingTimestamp,
	};

	const PagesCloud: Record<
			string,
			PresenceData | (() => Promise<PresenceData>)
		> = {
			"/dashboard": {
				details: "Browsing dashboard",
				state: `In: ${(
					document.querySelector(
						"button.tab-button--active"
					) as HTMLButtonElement
				)?.textContent.trim()}`,
			},
			"/fanatical": {
				details: "Browsing Dashboard",
				state: "Viewing Fanatical",
			},
			"/profile/account/main": {
				details: "In My Account",
				state: "Viewing my profile",
			},
			"/profile/devices": {
				details: "In My Account",
				state: "Viewing active devices",
			},
			"/profile/special": {
				details: "In My Account",
				state: "Viewing special offers",
			},
			"/network-test": {
				details: "SpeedTest",
				state: "Testing connection speed",
			},
			"/static/streaming/streaming.html": async (): Promise<PresenceData> => {
				const game = await getGame(
					Number(window.localStorage.getItem("appId"))
				);
				presenceData.details = `Playing: ${game?.name ?? "unknown game"}`;
				presenceData.state = `Platform: ${
					game?.platform ?? "Unknown Platform"
				}`;
				presenceData.largeImageKey = game?.icon ?? assets.unknownGame;
				return presenceData;
			},
			"/application/": async (): Promise<PresenceData> => {
				const game = await getGame(
					Number(pathname.replace("/application/", ""))
				);
				presenceData.details = "Seeing game information";
				presenceData.state = game?.name ?? "Unknown game";
				presenceData.largeImageKey = game?.icon ?? assets.unknownGame;
				return presenceData;
			},
		},
		check = (url: string): boolean => url === hostname,
		PagesDefault: Record<string, PresenceData> = {
			"/": { details: "Viewing Main Page" },
			"/download": { details: "Viewing download page" },
			"/faq/": { details: "Viewing Faq page" },
			"/blog/": { details: "Viewing Blog page" },
		};

	switch (true) {
		case check("boosteroid.com"): {
			update(PagesDefault);
			break;
		}
		case check("cloud.boosteroid.com"): {
			update(PagesCloud);
		}
	}

	async function update(
		record: Record<string, PresenceData | (() => Promise<PresenceData>)>
	) {
		for (const [path, data] of Object.entries(record)) {
			if (pathname.startsWith(path))
				presenceData = { ...presenceData, ...data };
		}

		if (presenceData.details) presence.setActivity(presenceData);
		else presence.setActivity();
	}
});
