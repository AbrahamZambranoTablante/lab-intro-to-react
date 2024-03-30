import React from "react";

function Post ({title, description}) {
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Post;