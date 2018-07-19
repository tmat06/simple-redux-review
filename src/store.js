import { createStore } from "redux";
import reducer from "./ducks/reducer";

//createStore holds the current state object, lets you dispatch objects, and specifies reducer that tells state how to be updated
export default createStore(reducer);
