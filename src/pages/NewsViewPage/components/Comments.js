import React, {useState} from "react";
import {Comment} from "../../../components/CommentView";

const Comments = ({comments}) => {
    return <div>
        <h5>Comments:</h5>
        {comments === undefined ?
            <h3>Loading...</h3>
            :
            <ul className="list-group mb-4">
                {comments.map(comment => (
                    <li className="list-group-item">
                        <Comment data={comment}/>
                    </li>
                ))}
            </ul>
        }
    </div>
}

export default Comments