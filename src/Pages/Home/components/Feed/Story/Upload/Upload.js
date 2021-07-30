import React, { useState } from "react";
import { Avatar, LinearProgress } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import style from "./Upload.module.css";
import { useSelector } from "react-redux";
import { db, timestamp, storage } from "../../../../../../Firebase/firebase";

const Upload = () => {
  const user = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress =
          Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              message: input,
              timestamp: timestamp,
              profilePic: user.photoURL,
              username: user.displayName,
              image: url,
            });
            setProgress(0);
            setInput("");
            setImage("");
          })
          .catch((err) => console.log(err));
      }
    );
  };
  return (
    <div className={style.uploadBox}>
      <div className={style.upload__top}>
        <Avatar src={user.photoURL}></Avatar>
        <form>
          <input
            type="text"
            placeholder={`What's on your mind, ${user.displayName}`}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        <div className={style.fileInput}>
        <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className={style.uploadImage}
            name="file-input"
            accept='image/*'
            id='file-input'
          />
          <label  htmlFor='file-input'>Choose Image</label>
        </div>
          <button type="submit" onClick={handleClick}>
            hidden
          </button>
        </form>
      </div>
      {progress > 0 && (
        <LinearProgress variant="determinate" value={progress}></LinearProgress>
      )}
      <div className={style.upload__bottom}>
        <div className={style.upload__option}>
          <Videocam style={{ color: "red" }}></Videocam>
          <h3>Live Video</h3>
        </div>
        <div className={style.upload__option}>
          <PhotoLibrary style={{ color: "green" }}></PhotoLibrary>
          <h3>Photo/Video</h3>
        </div>
        <div className={style.upload__option}>
          <InsertEmoticon style={{ color: "orange" }}></InsertEmoticon>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default Upload;
