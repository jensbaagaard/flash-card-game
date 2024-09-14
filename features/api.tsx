export interface GameData {
  seenCards: number[];
}

export async function getGameData(): Promise<GameData> {
  const gameData = localStorage.getItem("currentGame");
  if (gameData === null) return { seenCards: [] };
  return JSON.parse(gameData);
}

export async function setGameData(gameData: GameData) {
  localStorage.setItem("currentGame", JSON.stringify(gameData));
}
