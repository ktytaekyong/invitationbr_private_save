/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Video.module.scss";
/* Image */
import iconVideoPlay from "../../img/icon/icon_video_play.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Video = () => {
  const { videoList, setVideoList } = useContext(SetContext);
  return (
    <div className={`${styles.video} ${styles.style_theme_1}`}>
      <div className={styles.video__wrap}>
        <HeadLine title="동영상" content="movie"></HeadLine>
        <div className={styles.video__content}>
          <div className={styles.video__play}>
            <img src={iconVideoPlay} alt="" />
          </div>
          {/* <video src=""></video> */}
          <iframe height="100%" src={videoList.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video;