import React from 'react';
import "./PostView.css"

export const PostView = ({post}) => {
    return <div className={"PostView"}>
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <p>{post.body}</p>
    </div>
}