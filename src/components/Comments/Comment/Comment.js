import React from "react";

import cssClass from "./Comment.css";

const comment = props => {
    return (
        <div className={cssClass.Comment}>
            <div className={cssClass.Detail}>
                <strong>Name:</strong> {props.name}
            </div>
            
            <div className={cssClass.Body}>
                <strong>Comment:</strong> {props.body}
            </div>
            <div className={cssClass.Detail}>
                <strong>On:</strong>{" "}
                {new Date(props.publishedOn).toDateString()}
            </div>
        </div>
    );
};

export default comment;
