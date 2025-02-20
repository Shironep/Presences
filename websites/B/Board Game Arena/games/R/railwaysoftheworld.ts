import { GamePresence } from "..";
import {
	getActivePlayerId,
	getCurrentGameState,
	getCurrentGameStateType,
	getPlayerAvatar,
	getPlayerData,
	getPlayerScore,
	getUserPlayerId,
} from "../../util";

const railwaysoftheworld: GamePresence = {
	logo: "https://i.imgur.com/DwYNHrM.png",
	async getData(presence: Presence) {
		const gameState = await getCurrentGameState(presence),
			activePlayer = await getActivePlayerId(presence),
			gameStateType = await getCurrentGameStateType(presence),
			userPlayer = await getUserPlayerId(presence),
			activePlayerData = await getPlayerData(presence, activePlayer),
			data: PresenceData = {
				smallImageKey: getPlayerAvatar(userPlayer),
				smallImageText: `Score: ${getPlayerScore(userPlayer)}`,
			};
		if (activePlayer === userPlayer || gameStateType !== "activeplayer") {
			switch (gameState) {
				case "buildTrack":
					data.state = "Building track";
					break;
				case "chooseCard":
					data.state = "Taking an operation card";
					break;
				case "urbanize":
					data.state = "Managing a city";
					break;
				case "deliverGood":
					data.state = "Delivering a good";
					break;
				case "bidding":
					data.state = "Bidding for first player";
					break;
				case "westernLink":
					data.state = "Building a Western Link";
					break;
				case "chooseRailBaron":
					data.state = "Keeping a Rail Baron card";
					break;
				case "playerTurn":
					data.state = "Taking an action";
					break;
				case "tradingDepot":
					data.state = "Building a trading depot";
					break;
				case "placeMine":
					data.state = "Placing a mine";
					break;
				case "buildFuelDepot":
					data.state = "Building a fuel depot";
					break;
				case "maritimeConnection":
					data.state = "Building a maritime connection";
					break;
				case "gameEnd":
					data.state = "Viewing game results";
					break;
			}
		} else data.state = `Waiting for ${activePlayerData.name}`;
		return data;
	},
};
export default railwaysoftheworld;
