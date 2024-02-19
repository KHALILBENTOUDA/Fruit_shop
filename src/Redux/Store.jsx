import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducerfirch } from "./ReducerFitch";
export const Store=createStore(Reducerfirch,applyMiddleware(thunk))