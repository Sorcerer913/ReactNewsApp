import React, {useState} from "react";
import {PostFetcher} from "../helpers/PostFetcher";
import {Link} from "react-router-dom";
import {PostView} from "../../../components/PostView";

const Post = ({post}) => {

    return (
        <div>
            {/*<p>`Post №${postNum}`</p>*/}
            <PostView post={post}/>
        </div>
    )
}
export default Post