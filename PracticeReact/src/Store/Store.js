import { createStore } from "redux";
import Reducer from "../Reducer/apiData.js";

const store = createStore(Reducer);

export default store;
