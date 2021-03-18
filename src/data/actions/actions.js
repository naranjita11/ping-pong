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

export const saveSettings = ({ player1Name, player2Name, winningScore, alternateEvery }) => {
    return {
      type: "SAVE_SETTINGS",
  
      // we can use the action creator to tidy up the data
      // make sure it's definitely a number before it
      // gets to the reducer
      player1Name: player1Name,
      player2Name: player2Name,
      winningScore: +winningScore,
      alternateEvery: +alternateEvery,
    };
  };