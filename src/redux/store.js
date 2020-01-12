import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import calcReducer from "./calcReducer";

const reducers = (calcReducer);
export const store = createStore(reducers, composeWithDevTools());