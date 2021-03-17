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