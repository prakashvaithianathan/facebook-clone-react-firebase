import React, { useState, useEffect } from "react";
import style from "./Feed.module.css";
import Story from "./Story/Story";
import Upload from "./Story/Upload/Upload";
import { db } from "../../../../Firebase/firebase";
import Post from "./Story/Upload/Post/Post";

const Feed = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setPost(
          snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  return (
    <div className={style.feed}>
      <Story></Story>
      <Upload></Upload>
      {post.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          ></Post>
        );
      })}
    </div>
  );
};

export default Feed;
