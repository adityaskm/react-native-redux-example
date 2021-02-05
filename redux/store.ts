import { createStore } from "redux";
import { setName } from "./actions";
import { counterReducer, counterReducer2 } from "./reducers";

export const store = createStore(counterReducer2);

export const store2 = createStore(counterReducer);