import { all, put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import postApi from "../../api/posts";

export default function* getPostsSaga() {
    yield takeEvery(actionType.GET_POSTS, fetchPosts);
}

function* fetchPosts() {
    try {
        const postsResponse = yield call(postApi.getAll);
        console.debug(`postsResponse: ${postsResponse}`)
        yield put({ type: actionType.GOT_POSTS, payload: {posts: postsResponse[0], fullLength: postsResponse[1]} });
    } catch (err) {
        console.log(err);
    }
}