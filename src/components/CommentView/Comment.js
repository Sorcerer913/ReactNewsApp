import React, {useEffect, useState} from "react";
import "./Comment.css"

export const Comment = ({data}) => {
    return (
        <div className="Comment">
            <div>
                <p className="AuthorName">{data.name}</p>
            </div>
            <div>
                <p className="CommentText">{data.body}</p>
            </div>
        </div>
    )
}