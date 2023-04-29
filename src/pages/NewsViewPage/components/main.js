import React, {useEffect, useState} from "react";
import {PostFetcher} from "../helpers/PostFetcher";
import Post from "./Post";
import Comments from "./Comments";
import {CommentsFetcher} from "../helpers/CommentsFetcher";
import {Link, useHistory, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
export const PostPage = () => {
    const {postNum} = useParams()
    const [postData, setPostData] = useState({})
    const [commentsData, setCommentsData] = useState()


    useEffect(() => {
        PostFetcher(postNum, (post) => setPostData(post))
        CommentsFetcher(postNum, (data) => setCommentsData(data))
    }, [postNum])

    const history = useHistory()

    return (
        <div>
            <Button onClick={history.goBack}>{"Back to main page"}</Button>
            <Post post={postData}/>
            <Comments comments={commentsData}/>
        </div>
    )
}