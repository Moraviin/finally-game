export class GameState {
  constructor() {
    this.playerName = '';
    this.score = 0;
  }

  setPlayerName(name = '') {
    this.playerName = name;
  }

  upScore() {
    this.score += 1;
  }
}

let gameState = null;

export const setGameState = (state) => {
  gameState = state;
};

export const getGameState = () => gameState;
