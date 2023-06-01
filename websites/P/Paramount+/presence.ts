const presence = new Presence({
		clientId: "821433038335377418",
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);

let title: string, seasonEpisode: string, liveTitle: string;

function pathIncludes(path: string, str: string) {
	return path.includes(str);
}

const enum Logos {
	Paramount = "https://i.imgur.com/4Z2Dwvc.jpg",
	CBS = "https://i.imgur.com/EhhoDIU.png",
	BET = "https://i.imgur.com/w5Z4KgD.png",
	ComedyCentral = "https://i.imgur.com/Meq43i5.png",
	MTV = "https://i.imgur.com/GfVqh8i.png",
	Nickelodeon = "https://i.imgur.com/2m75sAU.jpg",
	Smithsonian = "https://i.imgur.com/8xy0AaS.png",
}

presence.on("UpdateData", async () => {
	const strings = await presence.getStrings({
		play: "general.playing",
		pause: "general.paused",
		live: "general.live",
	});
	let video: HTMLVideoElement = null;
	const vidArea = document.querySelector(".video__player-area"),
		presenceData: PresenceData = {
			largeImageKey: Logos.Paramount,
			startTimestamp: browsingTimestamp,
		},
		{ pathname: path } = document.location;

	switch (true) {
		case pathIncludes(path, "/home"):
			presenceData.details = "Browsing";
			presenceData.state = "Viewing home page";
			break;

		case pathIncludes(path, "/search"):
			presenceData.details = "Searching";
			presenceData.smallImageKey = Assets.Search;
			presenceData.smallImageText = "Searching";
			break;

		case pathIncludes(path, "/shows"): {
			if (vidArea && pathIncludes(path, "/video")) {
				const data = JSON.parse(
					document.querySelector('[type="application/ld+json"]').textContent
				);

				video = document.querySelector("video");

				title = data.partOfSeries.name;

				seasonEpisode = `S${data.partOfSeason.seasonNumber}:E${data.episodeNumber} - ${data.name}`;

				if (title) presenceData.details = title;

				if (seasonEpisode) presenceData.state = seasonEpisode;

				presenceData.smallImageKey = video.paused ? Assets.Pause : Assets.Play;
				presenceData.smallImageText = video.paused
					? strings.pause
					: strings.play;
				presenceData.largeImageKey = data.image || Logos.Paramount;

				[presenceData.startTimestamp, presenceData.endTimestamp] =
					presence.getTimestampsfromMedia(video);

				if (video.paused) {
					delete presenceData.startTimestamp;
					delete presenceData.endTimestamp;
				}
			} else if (
				!vidArea &&
				document.querySelector('[type="application/ld+json"]') !== null
			) {
				presenceData.details = "Viewing series";
				presenceData.state = JSON.parse(
					document.querySelector('[type="application/ld+json"]').textContent
				).name;
			} else {
				presenceData.details = "Browsing";
				presenceData.state = "Viewing Shows";
			}
			break;
		}

		case pathIncludes(path, "/movies"):
			if (
				vidArea &&
				document.querySelector("video.marqueeVideo") &&
				!vidArea.querySelector("video")
			) {
				presenceData.details = "Previewing a movie";
				presenceData.state = JSON.parse(
					document.querySelector('[type="application/ld+json"]').textContent
				).name;
			} else if (vidArea && vidArea.querySelector("video")) {
				const movData = JSON.parse(
					document.querySelector('[type="application/ld+json"]').textContent
				);

				video = vidArea.querySelector("video");

				if (movData.name) presenceData.state = movData.name;
				presenceData.details = "Watching a movie";

				presenceData.smallImageKey = video.paused ? Assets.Pause : Assets.Play;
				presenceData.smallImageText = video.paused
					? strings.pause
					: strings.play;

				[presenceData.startTimestamp, presenceData.endTimestamp] =
					presence.getTimestampsfromMedia(video);

				if (video.paused) {
					delete presenceData.startTimestamp;
					delete presenceData.endTimestamp;
				}
			} else {
				presenceData.details = "Browsing";
				presenceData.state = "Viewing Movies";
			}
			break;

		case pathIncludes(path, "/live"):
			liveTitle = document.querySelector(
				".video__metadata.padded-container > p"
			).textContent;

			presenceData.details = "Watching Live TV";
			presenceData.state = liveTitle;
			presenceData.smallImageKey = Assets.Live;
			presenceData.smallImageText = strings.live;
			break;

		case pathIncludes(path, "/brands"):
			presenceData.details = "Browsing Brands";
			presenceData.state = "Viewing Brands";

			if (pathIncludes(path, "/cbs/")) {
				presenceData.details = "Browsing Brand";
				presenceData.state = "CBS";
				presenceData.largeImageKey = Logos.CBS;
			} else if (pathIncludes(path, "/bet/")) {
				presenceData.details = "Browsing Brand";
				presenceData.state = "BET";
				presenceData.largeImageKey = Logos.BET;
			} else if (pathIncludes(path, "/comedy-central/")) {
				presenceData.details = "Browsing Brand";
				presenceData.state = "Comedy Central";
				presenceData.largeImageKey = Logos.ComedyCentral;
			} else if (pathIncludes(path, "/mtv/")) {
				presenceData.details = "Browsing Brand";
				presenceData.state = "MTV";
				presenceData.largeImageKey = Logos.MTV;
			} else if (pathIncludes(path, "/nickelodeon/")) {
				presenceData.details = "Browsing Brand";
				presenceData.state = "Nickelodeon";
				presenceData.largeImageKey = Logos.Nickelodeon;
			} else if (pathIncludes(path, "/smithsonian-channel/")) {
				presenceData.details = "Browsing Brand";
				presenceData.state = "Smithsonian Channel";
				presenceData.largeImageKey = Logos.Smithsonian;
			}

			break;

		case pathIncludes(path, "/my-list"):
			presenceData.details = "Browsing My List";
			break;

		case pathIncludes(path, "/news"):
			presenceData.details = "Browsing News";
			break;

		case pathIncludes(path, "/collections/sports-hub/"):
			presenceData.details = "Browsing Sports Hub";
			break;
	}

	presence.setActivity(presenceData);
});
