const presence = new Presence({
		clientId: "770395849041248306",
	}),
	strings = presence.getStrings({
		play: "general.playing",
		pause: "general.paused",
		live: "general.live",
	});

let elapsed: number, oldUrl: string;

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
			largeImageKey: "https://i.imgur.com/Np5TVJB.png",
		},
		{ href, pathname: path } = window.location;

	if (href !== oldUrl) {
		oldUrl = href;
		elapsed = Math.floor(Date.now() / 1000);
	}

	const video: HTMLVideoElement = document.querySelector("#player video");

	if (video) {
		const [startTimestamp, endTimestamp] = presence.getTimestamps(
				Math.floor(video.currentTime),
				Math.floor(video.duration)
			),
			seriesEp = document.querySelector(".season-episode-format"),
			live = document.querySelector(".flag.flag-live"),
			state = seriesEp
				? `${seriesEp.textContent} ${
						document.querySelector(".player-controls-subtitle-text").textContent
				  }`
				: live
				? "Watching Live"
				: "Watching",
			channel: HTMLImageElement = document.querySelector(
				".player-controls-subtitle img"
			);

		(presenceData.details = document.querySelector(
			".player-controls-title"
		)?.textContent),
			(presenceData.state = state);
		presenceData.smallImageKey = live
			? "live"
			: video.paused
			? "pause"
			: "play";
		presenceData.smallImageText = live
			? (await strings).live
			: video.paused
			? (await strings).pause
			: (await strings).play;
		presenceData.startTimestamp = live ? elapsed : startTimestamp;
		presenceData.endTimestamp = endTimestamp;

		if (live) delete presenceData.endTimestamp;

		if (video.paused) {
			delete presenceData.startTimestamp;
			delete presenceData.endTimestamp;
		}

		if (!presenceData.endTimestamp) delete presenceData.endTimestamp;

		if (presenceData.details && presenceData.state.trim()) {
			if (channel && channel.getAttribute("alt"))
				presenceData.state += ` on ${channel.getAttribute("alt")}`;

			presence.setActivity(presenceData, !video.paused);
		}
	} else {
		presenceData.details = "Browsing...";
		if (path.includes("/guide")) presenceData.details = "Browsing Guide";

		if (path.includes("/saved")) presenceData.details = "Browsing Saved";

		if (path.includes("/search")) presenceData.details = "Searching...";

		presenceData.startTimestamp = elapsed;
		presence.setActivity(presenceData);
	}
});
