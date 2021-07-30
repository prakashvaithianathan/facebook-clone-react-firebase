import React from "react";
import style from "./Post.module.css";
import { Avatar } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";

const Post = ({profilePic,image,username,timestamp,message}) => {
  return (
      <div className={style.post}>
          <div className={style.postTop}>
            <Avatar src={profilePic} className={style.avatar}></Avatar>
            <div className={style.postInfo}>
                 <h3>{username}</h3>
                 <p>{new Date(timestamp?.toDate()).toDateString()}</p>
            </div>
          </div>
          <div className={style.postBottom}>
              <p>{message}</p>
          </div>
          <div className={style.postImage}>
                   <img src={image} alt={message} />
          </div>
          <div className={style.postOptions}>
                 <div className={style.postOption}>
                     <ThumbUp></ThumbUp>
                     <p>Like</p>
                 </div>
                 <div className={style.postOption}>
                          <ChatBubbleOutline></ChatBubbleOutline>
                          <p>Comment</p>
                 </div>
                 <div className={style.postOption}>
                     <NearMe></NearMe>
                     <p>Share</p>
                 </div>
                 <div className={style.postOption}>
                     <AccountCircle></AccountCircle>
                     <ExpandMoreOutlined></ExpandMoreOutlined>
                 </div>
          </div>
      </div>
  )
};

export default Post;
