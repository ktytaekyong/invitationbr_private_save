/* Import */
import { useState, useContext } from "react";
import ReactDOM from 'react-dom';
import { AccountHandler, AccountNameHandler } from "../../utils/helpers.js";
/* Component */
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
import Toast from "../layout/Toast.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Gift.module.scss";
/* Image */
import iconGiftArrow from "../../img/icon/icon_gift_arrow.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Gift = () => {
  const { accountInfoList, selectOptionList } = useContext(SetContext);
  const { giftRef } = useContext(RefContext);

  const [isActive, setIsActive] = useState(selectOptionList.groomAccountView);
  const [isActive2, setIsActive2] = useState(selectOptionList.brideAccountView);
  const [open, setOpen] = useState(false);
  const activeToggleHandler = () => {
    setIsActive(!isActive);
  };
  const activeToggleHandler2 = () => {
    setIsActive2(!isActive2);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const copyAccountHandler = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      handleClick();
    } catch (error) {
      console.error("복사에 실패했습니다:", error); 
    }
  };
  return (
    <div ref={giftRef} id="Gift" className={`${styles.gift}`}>
      {
        ReactDOM.createPortal(<Toast type="copy" open={open} setOpen={setOpen} message="계좌번호가 복사되었습니다." />, document.body)
      }
      <div className={styles.gift__wrap}>
        <HeadLine title="마음 전하기" content="account" />
        <div className={styles.gift__content}>
          {
            accountInfoList.groomGroupList.length > 0 ?
            <div id="AccountM" className={styles.account__list}>
              <div className={styles.account__list_title} onClick={activeToggleHandler}>
                <p>{accountInfoList.groomTitle ? accountInfoList.groomTitle : "신랑측 계좌번호"}</p>
                <img src={iconGiftArrow} alt="" />
              </div>
              <div className={`${styles.account__list_content} ${isActive ? styles["active"] : ""}`}>
                {
                  accountInfoList.groomGroupList.map((item, idx) => (
                    <div key={item.name + idx} className={styles.account__item}>
                      <div className={styles.name}>
                        <p>
                          {/* 신랑  */}
                          <span>{item.name ? AccountNameHandler(item.name) : "예금주"}</span>
                        </p>
                        {
                          item.kakaopayUse ?<Button styleType="invitation__kakao" /> : null
                        }
                      </div>
                      <div className={styles.account}>
                        <p>
                          {item.bankType ? item.bankType : "은행"} | <span>{item.account ? AccountHandler(item.account) : "계좌번호"}</span></p>
                          <Button content="복사" styleType="invitation__copy" onClick={() => copyAccountHandler(item.account ? `${item.bankType} ${AccountHandler(item.account)}` : "계좌번호 없음")} />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            : null
          }
          {
            accountInfoList.brideGroupList.length > 0 ?
            <div id="AccountF" className={styles.account__list}>
              <div className={styles.account__list_title} onClick={activeToggleHandler2}>
                <p>{accountInfoList.brideTitle ? accountInfoList.brideTitle : "신부측 계좌번호"}</p>
                <img src={iconGiftArrow} alt="" />
              </div>
              <div className={`${styles.account__list_content} ${isActive2 ? styles["active"] : ""}`}>
                {
                  accountInfoList.brideGroupList.map((item, idx) => (
                    <div key={item.name + idx} className={styles.account__item}>
                      <div className={styles.name}>
                        <p>
                          {/* 신부 */}
                          <span>{item.name ? AccountNameHandler(item.name) : "예금주"}</span>
                        </p>
                        {
                          item.kakaopayUse ?<Button styleType="invitation__kakao" /> : null
                        }
                      </div>
                      <div className={styles.account}>
                        <p>
                          {item.bankType ? item.bankType : "은행"} | <span>{AccountHandler(item.account) ? item.account : "계좌번호"}</span>
                        </p>
                        <Button 
                          content="복사" 
                          styleType="invitation__copy" 
                          onClick={() => (
                            copyAccountHandler(item.account ? `${item.bankType} ${AccountHandler(item.account)}` : "계좌번호 없음")
                          )}
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            : null
          }

        </div>
      </div>
    </div>
  )
}

export default Gift;