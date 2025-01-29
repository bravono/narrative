import { combineReducers } from "redux";
import questionsReducer from "./surveys";
import responseReducer from "./responses";
import timersReducer from "./timers";
import elementsReducer from "./elements";

export default combineReducers({
  surveys: questionsReducer,
  responses: responseReducer,
  timers: timersReducer,
  elements: elementsReducer
});
 