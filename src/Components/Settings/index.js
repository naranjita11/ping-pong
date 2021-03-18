// import connect from React Redux
// this will talk to the Provider component, which has
// wrapped the entire app, so that it can access the store
import { connect } from "react-redux";
import { saveSettings } from "../../data/actions/actions"

// import the React component that we want to wrap
// in the same directory, so path is short
import Settings from "./Settings";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
const mapStateToProps = state => {
  return {
    winningScore: state.winningScore,
    alternateEvery: state.alternateEvery,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      handleSave: (data) => dispatch(saveSettings(data)),
    };
  };

// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(Settings);