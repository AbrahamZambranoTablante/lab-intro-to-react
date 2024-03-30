import React from "react";
import Post from "./Post";

function Posts ({posts}) {

   const fullPostInfo = posts.map(ele => <Post title={ele.title} description={ele.description}/>)

    return (
        <section className="Posts-container">
            <h3>Posts</h3>
            <div>{fullPostInfo}</div>
        </section>
    )
}

export default Posts;