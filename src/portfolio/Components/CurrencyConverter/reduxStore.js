import {createStore} from "redux";
import reducer from "./reduxReducer";

const reduxStore = createStore(reducer);

export default reduxStore;
