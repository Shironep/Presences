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

const sobektwoplayers: GamePresence = {
	logo: "https://i.imgur.com/Yln6lzl.png",
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
				case "playerTurn":
					data.state = "Taking an action";
					break;
				case "deben":
					data.state = "Choosing whether to take a Deben token";
					break;
				case "orientation":
					data.state = "Choosing the orientation of the Ankh pawn";
					break;
				case "pickResource":
					data.state = "Choosing a resource for the set";
					break;
				case "characterArchitect":
				case "pirogue":
					data.state = "Choosing a Pirogue token";
					break;
				case "pirogue04":
					data.state = "Choosing a tile for the opponent to take";
					break;
				case "pirogue07":
					data.state = "Choosing a resource to add the Pirogue token to";
					break;
				case "characterMerchant":
				case "playerTurn2":
					data.state = "Choosing a tile from the market";
					break;
				case "characterVizier":
					data.state = "Choosing a tile from the opponent's Corruption board";
					break;
				case "characterThief":
					data.state = "Choosing a tile from the opponent's hand";
					break;
				case "characterHighPriest":
					data.state = "Choosing a type to remove from the Corruption board";
					break;
				case "characterCourtesan":
					data.state = "Choosing a set to add tiles to";
					break;
				case "characterScribe":
					data.state = "Discarding tiles";
					break;
				case "gameEnd":
					data.state = "Viewing game results";
					break;
			}
		} else data.state = `Waiting for ${activePlayerData.name}`;
		return data;
	},
};
export default sobektwoplayers;
