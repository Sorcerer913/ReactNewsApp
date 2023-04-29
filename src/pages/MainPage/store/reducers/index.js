import { combineReducers } from "redux";

import getPosts from "./getPosts";

const mainReducer = combineReducers({
    getPosts,
});

export default mainReducer;