const presence = new Presence({
	clientId: "795125406264066099",
});

const enum Assets {
	Logo = "https://i.imgur.com/8jwNL3C.png",
}

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
			largeImageKey: Assets.Logo,
			startTimestamp: Math.floor(Date.now() / 1000),
		},
		{ pathname } = document.location;
	switch (
		pathname.endsWith("/") && pathname.length > 1
			? pathname.slice(0, pathname.length - 1)
			: pathname
	) {
		case "/airing":
			presenceData.details = "Viewing currently airing anime";
			break;
		case "/archive":
			presenceData.details = "Viewing anime archive";
			break;
		case "/tba":
			presenceData.details = "Viewing TBA anime";
			break;
		case "/settings":
			presenceData.details = "Customizing settings";
			break;
		default: {
			if ((document.querySelector(".input") as HTMLInputElement)?.value) {
				presenceData.details = "Searching anime";
				presenceData.smallImageKey = Assets.Search;
				presenceData.state = (
					document.querySelector(".input") as HTMLInputElement
				).value;
			} else {
				presenceData.details = `Viewing ${pathname
					.substring(1)
					.split("-")
					.join(" ")} anime`;
			}
			break;
		}
	}
	presence.setActivity(presenceData);
});
