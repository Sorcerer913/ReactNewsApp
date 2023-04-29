import {GET_POSTS, GOT_POSTS} from "./actionTypes";

export const getPosts = () => ({
    type: GET_POSTS,
});

export const gotPosts = (data) => {
    return { type: GOT_POSTS, posts: data.posts }
};