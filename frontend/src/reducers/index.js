import { combineReducers } from "redux";
import login from "./login";
import toss from "./toss";

export default combineReducers({
    login,
    toss
});

