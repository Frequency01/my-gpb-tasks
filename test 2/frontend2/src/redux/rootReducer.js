import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { repairsReducer } from "./repairsReducer";
export const rootReducer = combineReducers({
  repairs: repairsReducer,
  app: appReducer,
});
