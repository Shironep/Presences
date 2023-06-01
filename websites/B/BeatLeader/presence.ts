const presence = new Presence({
		clientId: "939893188448104468",
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);

const enum Assets {
	Logo = "https://i.imgur.com/ogoDV1c.png",
	Replay = "https://i.imgur.com/UxmT8G2.png",
}

enum OtherAssets {
	"360DegreeEasy" = "https://i.imgur.com/DVJ8DrX.png",
	"360DegreeExpert" = "https://i.imgur.com/TfqWdfp.png",
	"360DegreeExpertPlus" = "https://i.imgur.com/NA06k7F.png",
	"360DegreeHard" = "https://i.imgur.com/YPJtpLN.png",
	"360DegreeNormal" = "https://i.imgur.com/yQJMy15.png",
	"90DegreeEasy" = "https://i.imgur.com/Fo03ZyU.png",
	"90DegreeExpert" = "https://i.imgur.com/pQel27h.png",
	"90DegreeExpertPlus" = "https://i.imgur.com/VKgWOzs.png",
	"90DegreeHard" = "https://i.imgur.com/QG5xcsL.png",
	"90DegreeNormal" = "https://i.imgur.com/v6JkOai.png",
	Generated360DegreeEasy = "https://i.imgur.com/DVJ8DrX.png",
	Generated360DegreeExpert = "https://i.imgur.com/TfqWdfp.png",
	Generated360DegreeExpertPlus = "https://i.imgur.com/NA06k7F.png",
	Generated360DegreeHard = "https://i.imgur.com/YPJtpLN.png",
	Generated360DegreeNormal = "https://i.imgur.com/yQJMy15.png",
	Generated90DegreeEasy = "https://i.imgur.com/Fo03ZyU.png",
	Generated90DegreeExpert = "https://i.imgur.com/pQel27h.png",
	Generated90DegreeExpertPlus = "https://i.imgur.com/VKgWOzs.png",
	Generated90DegreeHard = "https://i.imgur.com/QG5xcsL.png",
	Generated90DegreeNormal = "https://i.imgur.com/v6JkOai.png",
	LawlessEasy = "https://i.imgur.com/VkQqgWI.png",
	LawlessExpert = "https://i.imgur.com/Nc3MWRg.png",
	LawlessExpertPlus = "https://i.imgur.com/6Vkd5bU.png",
	LawlessHard = "https://i.imgur.com/ndA08Dj.png",
	LawlessNormal = "https://i.imgur.com/rMaDUFX.png",
	LightshowEasy = "https://i.imgur.com/xc1Topa.png",
	LightshowExpert = "https://i.imgur.com/cJKkojn.png",
	LightshowExpertPlus = "https://i.imgur.com/rF4tn28.png",
	LightshowHard = "https://i.imgur.com/awviQ8Y.png",
	LightshowNormal = "https://i.imgur.com/J5qLp9b.png",
	NoArrowsEasy = "https://i.imgur.com/7fM9HNb.png",
	NoArrowsExpert = "https://i.imgur.com/aLfl2ix.png",
	NoArrowsExpertPlus = "https://i.imgur.com/WR2pnWY.png",
	NoArrowsHard = "https://i.imgur.com/tiIyXay.png",
	NoArrowsNormal = "https://i.imgur.com/k2t9Lac.png",
	OneSaberEasy = "https://i.imgur.com/BpKnvbM.png",
	OneSaberExpert = "https://i.imgur.com/aWrR0ln.png",
	OneSaberExpertPlus = "https://i.imgur.com/SEdFi3h.png",
	OneSaberHard = "https://i.imgur.com/ZfZATnl.png",
	OneSaberNormal = "https://i.imgur.com/qcILmPs.png",
	StandardEasy = "https://i.imgur.com/2J4LtXj.png",
	StandardExpert = "https://i.imgur.com/HVzq27X.png",
	StandardExpertPlus = "https://i.imgur.com/wcL9Uar.png",
	StandardHard = "https://i.imgur.com/dxfOJXE.png",
	StandardNormal = "https://i.imgur.com/KOgMFdx.png",
	HorizontalStandardEasy = "https://i.imgur.com/hA9LD1z.png",
	HorizontalStandardHard = "https://i.imgur.com/IdpA9PH.png",
	HorizontalStandardExpert = "https://i.imgur.com/2Zxpaxr.png",
	HorizontalStandardNormal = "https://i.imgur.com/UjuuZMC.png",
	HorizontalStandardExpertPlus = "https://i.imgur.com/0VIJU1e.png",
	VerticalStandardHard = "https://i.imgur.com/0MvOIBI.png",
	VerticalStandardEasy = "https://i.imgur.com/UDX5c2c.png",
	VerticalStandardExpertPlus = "https://i.imgur.com/z4LXkrs.png",
	VerticalStandardExpert = "https://i.imgur.com/PEczYdN.png",
	VerticalStandardNormal = "https://i.imgur.com/bYfuH9U.png",
	InvertedStandardExpert = "https://i.imgur.com/7OPKRus.png",
	InvertedStandardEasy = "https://i.imgur.com/mKgZt2H.png",
	InvertedStandardExpertPlus = "https://i.imgur.com/ok4CZZR.png",
	InvertedStandardNormal = "https://i.imgur.com/WNnRVMk.png",
	InvertedStandardHard = "https://i.imgur.com/mH9dCd8.png",
	InverseStandardHard = "https://i.imgur.com/zIDoBFP.png",
	InverseStandardExpertPlus = "https://i.imgur.com/SCJE2Af.png",
	InverseStandardEasy = "https://i.imgur.com/b7RzTZ5.png",
	InverseStandardExpert = "https://i.imgur.com/X6e7flW.png",
	InverseStandardNormal = "https://i.imgur.com/slXKlY2.png",
	HorizontalLawlessEasy = "https://i.imgur.com/hA9LD1z.png",
	HorizontalLawlessHard = "https://i.imgur.com/IdpA9PH.png",
	HorizontalLawlessExpert = "https://i.imgur.com/2Zxpaxr.png",
	HorizontalLawlessNormal = "https://i.imgur.com/UjuuZMC.png",
	HorizontalLawlessExpertPlus = "https://i.imgur.com/0VIJU1e.png",
	VerticalLawlessHard = "https://i.imgur.com/0MvOIBI.png",
	VerticalLawlessEasy = "https://i.imgur.com/UDX5c2c.png",
	VerticalLawlessExpertPlus = "https://i.imgur.com/z4LXkrs.png",
	VerticalLawlessExpert = "https://i.imgur.com/PEczYdN.png",
	VerticalLawlessNormal = "https://i.imgur.com/bYfuH9U.png",
	InvertedLawlessExpert = "https://i.imgur.com/7OPKRus.png",
	InvertedLawlessEasy = "https://i.imgur.com/mKgZt2H.png",
	InvertedLawlessExpertPlus = "https://i.imgur.com/ok4CZZR.png",
	InvertedLawlessNormal = "https://i.imgur.com/WNnRVMk.png",
	InvertedLawlessHard = "https://i.imgur.com/mH9dCd8.png",
	InverseLawlessHard = "https://i.imgur.com/zIDoBFP.png",
	InverseLawlessExpertPlus = "https://i.imgur.com/SCJE2Af.png",
	InverseLawlessEasy = "https://i.imgur.com/b7RzTZ5.png",
	InverseLawlessExpert = "https://i.imgur.com/X6e7flW.png",
	InverseLawlessNormal = "https://i.imgur.com/slXKlY2.png",
	HorizontalNoArrowsEasy = "https://i.imgur.com/hA9LD1z.png",
	HorizontalNoArrowsHard = "https://i.imgur.com/IdpA9PH.png",
	HorizontalNoArrowsExpert = "https://i.imgur.com/2Zxpaxr.png",
	HorizontalNoArrowsNormal = "https://i.imgur.com/UjuuZMC.png",
	HorizontalNoArrowsExpertPlus = "https://i.imgur.com/0VIJU1e.png",
	VerticalNoArrowsHard = "https://i.imgur.com/0MvOIBI.png",
	VerticalNoArrowsEasy = "https://i.imgur.com/UDX5c2c.png",
	VerticalNoArrowsExpertPlus = "https://i.imgur.com/z4LXkrs.png",
	VerticalNoArrowsExpert = "https://i.imgur.com/PEczYdN.png",
	VerticalNoArrowsNormal = "https://i.imgur.com/bYfuH9U.png",
	InvertedNoArrowsExpert = "https://i.imgur.com/7OPKRus.png",
	InvertedNoArrowsEasy = "https://i.imgur.com/mKgZt2H.png",
	InvertedNoArrowsExpertPlus = "https://i.imgur.com/ok4CZZR.png",
	InvertedNoArrowsNormal = "https://i.imgur.com/WNnRVMk.png",
	InvertedNoArrowsHard = "https://i.imgur.com/mH9dCd8.png",
	InverseNoArrowsHard = "https://i.imgur.com/zIDoBFP.png",
	InverseNoArrowsExpertPlus = "https://i.imgur.com/SCJE2Af.png",
	InverseNoArrowsEasy = "https://i.imgur.com/b7RzTZ5.png",
	InverseNoArrowsExpert = "https://i.imgur.com/X6e7flW.png",
	InverseNoArrowsNormal = "https://i.imgur.com/slXKlY2.png",
	HorizontalOneSaberEasy = "https://i.imgur.com/hA9LD1z.png",
	HorizontalOneSaberHard = "https://i.imgur.com/IdpA9PH.png",
	HorizontalOneSaberExpert = "https://i.imgur.com/2Zxpaxr.png",
	HorizontalOneSaberNormal = "https://i.imgur.com/UjuuZMC.png",
	HorizontalOneSaberExpertPlus = "https://i.imgur.com/0VIJU1e.png",
	VerticalOneSaberHard = "https://i.imgur.com/0MvOIBI.png",
	VerticalOneSaberEasy = "https://i.imgur.com/UDX5c2c.png",
	VerticalOneSaberExpertPlus = "https://i.imgur.com/z4LXkrs.png",
	VerticalOneSaberExpert = "https://i.imgur.com/PEczYdN.png",
	VerticalOneSaberNormal = "https://i.imgur.com/bYfuH9U.png",
	InvertedOneSaberExpert = "https://i.imgur.com/7OPKRus.png",
	InvertedOneSaberEasy = "https://i.imgur.com/mKgZt2H.png",
	InvertedOneSaberExpertPlus = "https://i.imgur.com/ok4CZZR.png",
	InvertedOneSaberNormal = "https://i.imgur.com/WNnRVMk.png",
	InvertedOneSaberHard = "https://i.imgur.com/mH9dCd8.png",
	InverseOneSaberHard = "https://i.imgur.com/zIDoBFP.png",
	InverseOneSaberExpertPlus = "https://i.imgur.com/SCJE2Af.png",
	InverseOneSaberEasy = "https://i.imgur.com/b7RzTZ5.png",
	InverseOneSaberExpert = "https://i.imgur.com/X6e7flW.png",
	InverseOneSaberNormal = "https://i.imgur.com/slXKlY2.png",
	RhythmGameStandardEasy = "https://i.imgur.com/SN0SB82.png",
	RhythmGameStandardNormal = "https://i.imgur.com/8q69Irt.png",
	RhythmGameStandardHard = "https://i.imgur.com/fGdRJFi.png",
	RhythmGameStandardExpert = "https://i.imgur.com/cMSJmN2.png",
	RhythmGameStandardExpertPlus = "https://i.imgur.com/I7C5hh5.png",
	"Standard-PinkPlay_ControllableEasy" = "https://i.imgur.com/WUrtbJN.png",
	"Standard-PinkPlay_ControllableNormal" = "https://i.imgur.com/qVrcnQm.png",
	"Standard-PinkPlay_ControllableHard" = "https://i.imgur.com/IHojhMe.png",
	"Standard-PinkPlay_ControllableExpert" = "https://i.imgur.com/WCDqLTy.png",
	"Standard-PinkPlay_ControllableExpertPlus" = "https://i.imgur.com/b0s6gOI.png",
	"OneSaber-PinkPlay_ControllableEasy" = "https://i.imgur.com/8FHZdoB.png",
	"OneSaber-PinkPlay_ControllableNormal" = "https://i.imgur.com/lNKAD4R.png",
	"OneSaber-PinkPlay_ControllableHard" = "https://i.imgur.com/U3JQ1AX.png",
	"OneSaber-PinkPlay_ControllableExpert" = "https://i.imgur.com/T6LUmHs.png",
	"OneSaber-PinkPlay_ControllableExpertPlus" = "https://i.imgur.com/2MX1H5S.png",
	"Lawless-PinkPlay_ControllableEasy" = "https://i.imgur.com/r6YFLI2.png",
	"Lawless-PinkPlay_ControllableNormal" = "https://i.imgur.com/61sOBdQ.png",
	"Lawless-PinkPlay_ControllableHard" = "https://i.imgur.com/sj2rlLh.png",
	"Lawless-PinkPlay_ControllableExpert" = "https://i.imgur.com/CR2vW7j.png",
	"Lawless-PinkPlay_ControllableExpertPlus" = "https://i.imgur.com/RA4btcU.png",
	"360Degree-PinkPlay_ControllableEasy" = "https://i.imgur.com/DVJ8DrX.png",
	"360Degree-PinkPlay_ControllableExpert" = "https://i.imgur.com/TfqWdfp.png",
	"360Degree-PinkPlay_ControllableExpertPlus" = "https://i.imgur.com/NA06k7F.png",
	"360Degree-PinkPlay_ControllableHard" = "https://i.imgur.com/YPJtpLN.png",
	"360Degree-PinkPlay_ControllableNormal" = "https://i.imgur.com/yQJMy15.png",
	"90Degree-PinkPlay_ControllableEasy" = "https://i.imgur.com/Fo03ZyU.png",
	"90Degree-PinkPlay_ControllableExpert" = "https://i.imgur.com/pQel27h.png",
	"90Degree-PinkPlay_ControllableExpertPlus" = "https://i.imgur.com/VKgWOzs.png",
	"90Degree-PinkPlay_ControllableHard" = "https://i.imgur.com/QG5xcsL.png",
	"90Degree-PinkPlay_ControllableNormal" = "https://i.imgur.com/v6JkOai.png",
	"Lightshow-PinkPlay_ControllableEasy" = "https://i.imgur.com/xc1Topa.png",
	"Lightshow-PinkPlay_ControllableExpert" = "https://i.imgur.com/cJKkojn.png",
	"Lightshow-PinkPlay_ControllableExpertPlus" = "https://i.imgur.com/rF4tn28.png",
	"Lightshow-PinkPlay_ControllableHard" = "https://i.imgur.com/awviQ8Y.png",
	"Lightshow-PinkPlay_ControllableNormal" = "https://i.imgur.com/J5qLp9b.png",
	"NoArrows-PinkPlay_ControllableEasy" = "https://i.imgur.com/7fM9HNb.png",
	"NoArrows-PinkPlay_ControllableExpert" = "https://i.imgur.com/aLfl2ix.png",
	"NoArrows-PinkPlay_ControllableExpertPlus" = "https://i.imgur.com/WR2pnWY.png",
	"NoArrows-PinkPlay_ControllableHard" = "https://i.imgur.com/tiIyXay.png",
	"NoArrows-PinkPlay_ControllableNormal" = "https://i.imgur.com/k2t9Lac.png",
	undefinedEasy = "https://i.imgur.com/2J4LtXj.png",
	undefinedExpert = "https://i.imgur.com/HVzq27X.png",
	undefinedExpertPlus = "https://i.imgur.com/wcL9Uar.png",
	undefinedHard = "https://i.imgur.com/dxfOJXE.png",
	undefinedNormal = "https://i.imgur.com/KOgMFdx.png",
}

presence.info("Presence loaded");

let replay = {
	name: "",
	subName: "",
	currentTime: "",
	playing: false,
	duration: "",
	playerName: "",
	cover: "",
};

presence.on(
	"iFrameData",
	(data: {
		name: string;
		subName: string;
		currentTime: string;
		playing: boolean;
		duration: string;
		playerName: string;
		cover: string;
	}) => {
		replay = data;
	}
);

presence.on("UpdateData", async () => {
	const [time, buttons, cover] = await Promise.all([
			presence.getSetting<boolean>("time"),
			presence.getSetting<boolean>("buttons"),
			presence.getSetting<boolean>("cover"),
		]),
		presenceData: PresenceData = {
			startTimestamp: browsingTimestamp,
		},
		{ pathname, href, hostname } = document.location;

	if (hostname.split(".")[0] === "www") {
		presenceData.largeImageKey = Assets.Logo;
		switch (pathname.split("/")[1]) {
			case "u": {
				presenceData.details = "Viewing profile";
				presenceData.state =
					document.querySelector(".player-nickname a")?.textContent;
				presenceData.smallImageKey =
					document.querySelector<HTMLImageElement>(".countryIcon")?.src;
				if (cover) {
					presenceData.largeImageKey =
						document.querySelector<HTMLImageElement>(".avatar")?.src;
				}
				presenceData.buttons = [
					{
						label: "View Page",
						url: href,
					},
				];
				break;
			}
			case "leaderboard": {
				const previewURL = new URL(
					document.querySelector<HTMLAnchorElement>(
						'a[href^="https://allpoland.github.io"]'
					)?.href
				);
				presenceData.details =
					document.querySelector(".title .name")?.textContent;
				presenceData.state =
					document.querySelector(".level-author")?.textContent;
				presenceData.smallImageText = `${
					document.querySelector<HTMLAnchorElement>(
						".diff-switch .primary > .icon > div"
					)?.title
				} ${
					document.querySelector(".diff-switch .primary > span:nth-of-type(2)")
						?.textContent
				}`;
				presenceData.smallImageKey =
					OtherAssets[
						`${previewURL.searchParams.get(
							"mode"
						)}${previewURL.searchParams.get(
							"difficulty"
						)}` as keyof typeof OtherAssets
					] ??
					OtherAssets[
						`undefined${previewURL.searchParams.get(
							"difficulty"
						)}` as keyof typeof OtherAssets
					];
				if (cover) {
					presenceData.largeImageKey = document
						.querySelector("header")
						.style.backgroundImage.match(
							/(https:\/\/.+\.((png)|(jpg)|(jpeg)))/g
						)
						?.toString();
				}
				presenceData.buttons = [
					{
						label: "View Page",
						url: href,
					},
				];
				break;
			}
			case "event": {
				presenceData.details = "Viewing event";
				presenceData.state = document.querySelector("h2")?.textContent;
				presenceData.buttons = [
					{
						label: "View Page",
						url: href,
					},
				];
				if (cover) {
					presenceData.largeImageKey =
						document.querySelector<HTMLImageElement>("section > img")?.src;
				}
				break;
			}
			case "clan": {
				presenceData.details = "Viewing clan";
				presenceData.state = document.querySelector(".title")?.textContent;
				presenceData.buttons = [
					{
						label: "View Page",
						url: href,
					},
				];
				if (cover) {
					presenceData.largeImageKey =
						document.querySelector<HTMLImageElement>(".clanImage").src;
				}
				break;
			}
			case "playlist": {
				presenceData.details = "Viewing playlist";
				presenceData.state =
					document.querySelector(".playlistTitle")?.textContent;
				presenceData.buttons = [
					{
						label: "View Page",
						url: href,
					},
				];
				break;
			}
			case "settings": {
				presenceData.details = "Viewing settings";
				presenceData.state = document.querySelector(
					".navigation-item.selected"
				).textContent;
				break;
			}
			case "dashboard": {
				presenceData.details = "Viewing dashboard";
				break;
			}
			case "": {
				presenceData.details = "Viewing dashboard";
				break;
			}
			case "ranking": {
				presenceData.details = "Viewing ranking";
				break;
			}
			case "clans": {
				presenceData.details = "Browsing clans";
				break;
			}
			case "leaderboards": {
				presenceData.details = "Browsing leaderboards";
				break;
			}
			case "events": {
				presenceData.details = "Browsing events";
				break;
			}
			case "playlists": {
				presenceData.details = "Viewing playlists";
				break;
			}
			case "search": {
				presenceData.details = "Searching users";
				break;
			}
			case "followed": {
				presenceData.details = "Viewing their follows";
				break;
			}
		}
		if (
			document
				.querySelector<HTMLIFrameElement>("iframe")
				?.src.includes("replay.beatleader.xyz") &&
			replay.name
		) {
			presenceData.largeImageKey = cover ? replay.cover : Assets.Replay;
			presenceData.details = replay.name;
			presenceData.state = replay.playerName;
			presenceData.smallImageKey = replay.playing ? Assets.Play : Assets.Pause;
			presenceData.smallImageText = replay.playing ? "Playing" : "Paused";
			if (replay.playing) {
				const timestamps = presence.getTimestamps(
					presence.timestampFromFormat(replay.currentTime),
					presence.timestampFromFormat(replay.duration)
				);
				presenceData.endTimestamp = timestamps[1];
			}
			presenceData.buttons = [
				{
					label: "View Replay",
					url: document.querySelector<HTMLIFrameElement>("iframe").src,
				},
			];
		}
	} else if (hostname.split(".")[0] === "replay") {
		presenceData.largeImageKey = cover
			? document.querySelector<HTMLImageElement>("#songImage").src
			: Assets.Replay;
		presenceData.details = document.querySelector("#songName").textContent;
		presenceData.state = document.querySelector("#playerName").textContent;
		presenceData.smallImageKey = document.querySelector("div.btn.play")
			? Assets.Pause
			: Assets.Play;
		presenceData.smallImageText = document.querySelector("div.btn.play")
			? "Paused"
			: "Playing";
		if (document.querySelector("div.btn.pause")) {
			const timestamps = presence.getTimestamps(
				presence.timestampFromFormat(
					document.querySelector("#songProgress").textContent
				),
				presence.timestampFromFormat(
					document.querySelector("#songDuration").textContent
				)
			);
			presenceData.endTimestamp = timestamps[1];
		}
		presenceData.buttons = [
			{
				label: "View Replay",
				url: href,
			},
		];
	} else if (hostname.split(".")[0] === "royale") {
		presenceData.largeImageKey = cover
			? document.querySelector<HTMLImageElement>("#songImage").src
			: Assets.Replay;
		presenceData.details = document.querySelector("#songName").textContent;
		presenceData.state = `${
			document.querySelectorAll(".playerTableRow")?.length
		} player royale`;
		presenceData.smallImageKey = document.querySelector("div.btn.play")
			? Assets.Pause
			: Assets.Play;
		presenceData.smallImageText = document.querySelector("div.btn.play")
			? "Paused"
			: "Playing";
		if (document.querySelector("div.btn.pause")) {
			const timestamps = presence.getTimestamps(
				presence.timestampFromFormat(
					document.querySelector("#songProgress").textContent
				),
				presence.timestampFromFormat(
					document.querySelector("#songDuration").textContent
				)
			);
			presenceData.endTimestamp = timestamps[1];
		}
		presenceData.buttons = [
			{
				label: "View Royale",
				url: href,
			},
		];
	}
	if (!time) {
		delete presenceData.startTimestamp;
		delete presenceData.endTimestamp;
	}
	if (!buttons && presenceData.buttons) delete presenceData.buttons;

	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
