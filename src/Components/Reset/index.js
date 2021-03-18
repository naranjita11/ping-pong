// import connect from React Redux
// this will talk to the Provider component, which has
// wrapped the entire app, so that it can access the store
import { connect } from "react-redux";
import { reset } from "../../data/actions/actions";

// import the React component that we want to wrap
// in the same directory, so path is short
import Reset from "./Reset";

// mapDispatchToProps: passes in the store.dispatch method
// we can then create anonymous functions to call it with the
// correct actions - these get merged in to any other props being passed in
const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => dispatch(reset()),
  };
};

// use the connect function to connect mapDispatchToProps
// to the React component we want to wrap
// note that we pass null for the first argument (mapStateToProps)
// returns a new React component
export default connect(null, mapDispatchToProps)(Reset);