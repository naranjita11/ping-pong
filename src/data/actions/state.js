// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
return {
    type: "RESET",
    };
};

export const p1Increment = () => {
    return {
        type: "P1_SCORES",
    };
};

export const p2Increment = () => {
    return {
        type: "P2_SCORES",
    };
};

export const saveSettings = ({ id, player_1, player_2, winning_score, change_serve}) => {
    return {
      type: "SAVE_SETTINGS",
  
      // we can use the action creator to tidy up the data
      // make sure it's definitely a number before it
      // gets to the reducer
      id: id,
      player1Name: player_1.name,
      player2Name: player_2.name,
    //   player1Score: player_1.score,
    //   player2Score: player_2.score,
    //   p1serving: player_1.serving,
      winningScore: winning_score,
      alternateEvery: change_serve,
    };
  };