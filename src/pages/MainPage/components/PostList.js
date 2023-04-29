import React, {useState} from "react";
import Post from "./Post";

const Posts = ({posts}) => {
    console.debug(posts)
    if (posts[0] === undefined){
        console.info(`posts: ${posts}`)
        console.info()
    }
    return (
        <div>
            <ul className="list-group mb-4">
                {posts[0] === {} ?
                    posts.map(post => (
                        <li className="list-group-item">
                            <Post post={post} loading={true}/>
                            {/*<PostCard title={post.title} author={post.authorName} url={`/post/${post.id}`}></PostCard>*/}
                        </li>
                    ))
                    :
                    posts.map(post => (
                        <li key={post.id} className="list-group-item">
                            <Post post={post}/>
                            {/*<PostCard title={post.title} author={post.authorName} url={`/post/${post.id}`}></PostCard>*/}
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default Posts