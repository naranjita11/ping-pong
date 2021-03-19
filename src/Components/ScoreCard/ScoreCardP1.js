// import connect from React Redux
// this will talk to the Provider component, which has
// wrapped the entire app, so that it can access the store
import { connect } from "react-redux";
import { p1Increment } from "../../data/actions/state";

// import the React component that we want to wrap
// in the same directory, so path is short
import ScoreCard from "./ScoreCard";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
const mapStateToProps = state => {
  return {
    player: state.player1Name,
    playerScore: state.player1Score,
    serving: state.p1serving,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(p1Increment()),
  };
};

// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);