const initialState = {
  counter: 0
};

const UPDATE_NUM = "UPDATE_NUM";

//reducer is a pure function to update the logic of your application of the next state and current state that will be dispatched
//it contains a switch statement to know which function to run to update state then returns.
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_NUM":
      return Object.assign({}, state, {
        counter: state.counter + action.payload
      });
    default:
      return state;
  }
}

export function updateNum(num) {
  return {
    type: UPDATE_NUM,
    payload: num
  };
}

//export default reducer
