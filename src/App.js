import React from "react";
import { updateNum } from "./ducks/reducer";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={() => this.props.updateNum(1)}>Increase</button>
      </div>
    );
  }
}

//will map the state from Redux to the props of the component
function mapReduxStateToProps(state) {
  const { counter } = state;
  return {
    counter
  };
}

//connect is simply subscribing the component to the store
export default connect(
  mapReduxStateToProps,
  { updateNum }
)(App);
