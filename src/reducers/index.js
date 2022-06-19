import { combineReducers } from "redux";
import userReducers from "./userReducer";
const rootReducers = combineReducers({
  user: userReducers,
});

export default rootReducers;
