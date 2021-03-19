// import in existing state action
import { saveSettings } from "./state";
import axios from "../../axios";

// accept a value argument
export const postSettings = ({ player1Name, player2Name, winningScore, alternateEvery }) => {
    return (dispatch) => {
        // make a PUT request
        axios.post("/games", {
            // pass along the data to the API
            // can pass in a regular object literal
            // axios will convert into JSON
            player_1: player1Name,
            player_2: player2Name,
            winning_score: +winningScore,
            change_serve: +alternateEvery,
        }).then(({ data }) => {
            // get the step result off the data
            // pass it along to the existing saveSettings action
            dispatch(saveSettings(data.data));
        });
    };
};