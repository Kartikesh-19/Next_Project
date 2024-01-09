import { combineReducers } from "redux";
import HandleSlice from "./Slice/HandleSlice";

const rootReducer = combineReducers({ movies: HandleSlice });
export default rootReducer;