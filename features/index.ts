import { combineReducers } from "redux";
import newsReducer from "./News/reducer";

const reducers = combineReducers({
    news: newsReducer
})

export default reducers;