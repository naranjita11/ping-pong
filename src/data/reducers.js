import initial from "./initial";

const player1incr = state => ({ ...state, player1: state.player1 + 1 });
const player2incr = state => ({ ...state, player2: state.player2 + 1 });

const chooseServer = state => {
  const total = state.player1 + state.player2;
  const noOfServes = state.player2 >= (state.winningScore - 1) && state.player1 >= (state.winningScore - 1) ? 2 : state.alternateEvery;

  return {
    ...state,
    p1serving: total % noOfServes === 0 ? !state.p1serving : state.p1serving ,
  };
};

const win = state => {
  if (state.player1 >= state.winningScore && state.player2 <= (state.player1 - 2)) {
    return {
      ...state,
      winner: 1,
    };
  }
  if (state.player2 >= state.winningScore && state.player1 <= (state.player2 - 2)) {
    return {
      ...state,
      winner: 2,
    };
  }
  else return state;
}

// destructured action object with user inputted data
const newGameSettings = (state, { player1Name, player2Name, winningScore, alternateEvery }) => {
  return {
    ...state,
    gameStarted: true,
    player1Name: player1Name,
    player2Name: player2Name,
    winningScore: winningScore,
    alternateEvery: alternateEvery,
  };

};

const reducer = (state, action) => {
  switch (action.type) {
    case "P1_SCORES": return win(chooseServer(player1incr(state)));
    case "P2_SCORES": return win(chooseServer(player2incr(state)));
    case "RESET": return initial;
    case "SAVE_SETTINGS": return newGameSettings(state, action);
    default: return state;
  }
};

export default reducer;