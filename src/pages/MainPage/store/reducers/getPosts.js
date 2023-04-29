import {GET_POSTS, GOT_POSTS} from "../actions/actionTypes";

const getPosts = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: [],
                loading: true,
                error: false,
            };
        case GOT_POSTS:
            return {
                posts: action.posts,
                loading: false,
                error: false,
            };
        default:
            return state
    }
}

export default getPosts