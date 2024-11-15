/* Import */
import { useState, useEffect, useContext, useRef } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeD.module.scss";
/* Image */
import defaultImg from "../../img/notice/notice_photo_test2.png"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const NoticeD = () => {
  const { noticeDList, setNoticeDList } = useContext(SetContext);
  return (
    <div id="NoticeD" className={`${styles.notice}`}>
      <div className={styles.notice__wrap}>
        <HeadLine title="공지사항" content="notice" />
        <div className={styles.notice__content}>
          {
            noticeDList.map((item, idx) => (
              <div 
                key={item.title + idx} 
                className={`${styles.content} ${styles[noticeDList[idx].position]}`}
              >
                <div className={styles.title}>
                  <p>{item.title ? item.title : "답례품 안내"}</p>
                </div>
                <p>
                  {item.content ? item.content : "식사를 못하고 가시는 분들을 위해 피로연 출구에\n작은 선물을 준비했으니 잊지 마시고 챙겨 가세요."}
                </p>
                <img src={item.src === "" ? defaultImg : item.src} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NoticeD;