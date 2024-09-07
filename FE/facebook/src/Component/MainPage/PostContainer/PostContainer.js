import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Post from "./Post";

const PostContainer = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      updateData() {
        fetch("http://localhost:8080/api/postService/getAllPost")
            .then(response => response.json())
            .then(json => {
                if (json) {
                    setPost(json);
                }
            })
      }
    }));

    const [post, setPost] = useState(null);

    const getData = () => {
        fetch("http://localhost:8080/api/postService/getAllPost")
            .then(response => response.json())
            .then(json => {
                if (json) {
                    setPost(json);
                }
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {
                post && post.map((item) => (
                    <Post object={item} getData={getData} />
                ))
            }
        </div>
    );
});
 
export default PostContainer;