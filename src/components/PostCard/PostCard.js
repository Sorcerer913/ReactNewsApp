import React from 'react';
import "./PostCard.css"

export const PostCard = ({post, loading, onClick}) => {
    let title = post.title
    let author = post.author
    let postOnClick = onClick


    if(loading){
        title = "Loading..."
        author = "Loading..."
        postOnClick = () => {}
    }

    return <div className="PostCard unselectable" onClick={postOnClick}>
        <h5 className="PostAuthor">{author}</h5>
        <h4 className="PostTitle">{title}</h4>
    </div>
}