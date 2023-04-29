import React, {useEffect, useState} from "react";
import {PostCard} from "../../../components/PostCard/index";
import {PostAuthorNameFetcher} from "../helpers/PostsFetcher";
import {useHistory} from "react-router-dom";

const Post = ({post, loading}) => {
    console.log(post)
    // const [postView, setPostView] = useState({})

    // useEffect(()=>{
    //     if (post.userId === undefined) return
    //     const afterFetch = (name) => {
    //         const postDto = {
    //             id: post.id,
    //             title: post.title,
    //             author: name,
    //             authorId: post.userId,
    //             path: `/post/${post.id}`
    //         }
    //
    //         setPostView(postDto)
    //     }
    //     PostAuthorNameFetcher(post.userId, afterFetch)
    // }, [post])

    const history = useHistory()
    const handleClick = () => history.push(`/post/${post.id}`)


    // if(loading) {
    //     return <h2>Loading...</h2>
    // }

    return (
        <PostCard post={post} loading={loading} onClick={handleClick}/>
    )
    /*<PostCard title={post.title} author={post.authorName} url={`/post/${post.id}`}></PostCard>*/

}

export default Post