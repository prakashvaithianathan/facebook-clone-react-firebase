import React from "react";
import style from "./Ads.module.css";

const Ads = () => {
  return (
    <div >
      <iframe
      className={style.ads}
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fframerjs%2Fvideos%2F133842818664434%2F&show_text=false&width=476&t=0"
        width="476"
        height="476"
        style={{border:'none',overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        // allowFullScreen="true"
        // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        // allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default Ads;
