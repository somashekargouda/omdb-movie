import { createStore, applyMiddlwware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const store = createStore(rootReducer, applyMiddlwware(thunk));

export default store;
