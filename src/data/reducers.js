import initial from "./initial";

const player1incr = state => ({ ...state, player1Score: state.player1Score + 1 });
const player2incr = state => ({ ...state, player2Score: state.player2Score + 1 });

const chooseServer = state => {
  const total = state.player1Score + state.player2Score;
  const noOfServes = state.player2Score >= (state.winningScore - 1) && state.player1Score >= (state.winningScore - 1) ? 2 : state.alternateEvery;

  return {
    ...state,
    p1serving: total % noOfServes === 0 ? !state.p1serving : state.p1serving ,
  };
};

const win = state => {
  if (state.player1Score >= state.winningScore && state.player2Score <= (state.player1Score - 2)) {
    return {
      ...state,
      winner: 1,
    };
  }
  if (state.player2Score >= state.winningScore && state.player1Score <= (state.player2Score - 2)) {
    return {
      ...state,
      winner: 2,
    };
  }
  else return state;
}

// destructured action object with user inputted data
const newGameSettings = (state, { id, player1Name, player2Name, winningScore, alternateEvery }) => {
  return {
    ...state,
    gameStarted: true,
    id: id,
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