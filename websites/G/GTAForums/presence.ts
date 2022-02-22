const presence = new Presence({
		clientId: "713726722671116330"
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
		largeImageKey: "logo",
		startTimestamp: browsingTimestamp
	};

	if (document.location.pathname === "/") {
		presenceData.details = "Browsing the home page...";
		presenceData.smallImageKey = "home";
	} else if (document.location.pathname.startsWith("/settings")) {
		delete presenceData.details;
		presenceData.details = "In settings...";
		presenceData.smallImageKey = "settings";
		presenceData.state = "Overview";
		switch (document.location.pathname) {
			case "/settings/email/":
				presenceData.state = "Email Address";
				break;
			case "/settings/password/":
				presenceData.state = "Password";
				break;
			case "/settings/account-security/":
				presenceData.state = "Account Security";
				break;
			case "/settings/devices/":
				presenceData.state = "Recently Used Devices";
				break;
			case "/settings/username/":
				presenceData.state = "Username";
				break;
		}
	} else if (document.location.pathname.startsWith("/profile/")) {
		delete presenceData.details;
		presenceData.details = "Browsing a profile...";
		presenceData.state = document.querySelectorAll(
			".ipsType_reset.ipsPageHead_barText"
		)[0].textContent;
	} else if (document.location.pathname.startsWith("/forum/")) {
		delete presenceData.details;
		presenceData.details = "Browsing a category...";
		presenceData.state =
			document.querySelectorAll(".ipsType_pageTitle")[0].textContent;
		if (document.location.href.match("/?do=add")) {
			delete presenceData.details;
			delete presenceData.state;
			presenceData.details = "Starting a new topic...";
		}
	} else if (document.location.pathname.startsWith("/topic/")) {
		delete presenceData.details;
		presenceData.details = "Browsing a topic...";
		presenceData.state = document.querySelectorAll(
			".ipsType_break.ipsContained"
		)[0].textContent;
	} else if (document.location.pathname.startsWith("/search/")) {
		delete presenceData.details;
		presenceData.details = "Searching...";
		presenceData.smallImageKey = "search";
		presenceData.state = `Looking${
			document
				.querySelectorAll(".ipsType_reset.ipsType_large")[0]
				.textContent.split("results")[1]
		}`;
	} else {
		delete presenceData.details;
		switch (document.location.pathname) {
			case "/followed/":
				presenceData.details = "Managing Followed Content.";
				break;
			case "/notifications/":
				presenceData.details = "Viewing your notifications...";
				break;
			case "/messenger/":
				presenceData.details = "Viewing your inbox...";
				break;
			case "/ignore/":
				presenceData.details = "Managing your ignored users.";
				break;
			case "/privacy/":
				presenceData.details = "Reading privace policy...";
				break;
			case "/register/":
				presenceData.details = "Just registering...";
				break;
			case "/login/":
				presenceData.details = "Just logging...";
				break;
			case "/discover/unread/":
				presenceData.details = "Viewing Unread Content...";
				break;
			case "/discover/":
				presenceData.details = "Viewing All Activity...";
				break;
		}
	}

	presence.setActivity(presenceData);
});
