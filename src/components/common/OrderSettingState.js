/* Import */
import { useState, useEffect, useContext, useCallback } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import update from "immutability-helper";
/* Component */
import OrderSettingStateFixedWrapper from "./OrderSettingStateFixedWrapper.js";
import OrderSettingStateItem from "./OrderSettingStateItem.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingState.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const fixedList = ["고정 탭 설정", "기본 정보", "배경", "인트로 화면", "인트로 사진", "신랑/신부 정보", "하단 글귀", "카톡 공유", "URL 공유"];
const OrderSettingState = () => {
  const { settingOrderList, setSettingOrderList, settingList } = useContext(SetContext);
  const moveItemHandler = useCallback((dragIndex, hoverIndex) => {
    setSettingOrderList((prevList) =>
      {
        const updateOrderList = update(prevList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevList[dragIndex]],
          ],
        });
        let currentOrder = 1;
        return updateOrderList.map((item) => (
          {
            ...item,
            order: currentOrder++
          }
        ));
      }
    )
  }, [settingOrderList]);
  const renderItemHandler = useCallback((item, index) => {
    return (
        <OrderSettingStateItem 
          key={`${item.title}${index}`} 
          index={index}
          id={`${item.title}${index}`} 
          moveItemHandler={moveItemHandler}
          className={`${styles.order__wrapper}`} 
        >
          <div className={styles.order__item}>
            {
              item.option ?
              <>
                <input type="checkbox" id={`orderItem${item.order}`}/>
                <label htmlFor="">{item.title}</label>
              </>
              :
              <p>{item.title}</p>
            }
          </div>
        </OrderSettingStateItem>
    )
  }, [])
  useEffect(() => {
    console.log(settingOrderList);
  }, [settingOrderList]);
  return (
    <DndProvider options={HTML5toTouch}>
      <div className={styles.order__setting}>
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => idx < 3}></OrderSettingStateFixedWrapper>
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => ((idx > 2) && (idx < 6))}></OrderSettingStateFixedWrapper>
        {settingOrderList.map((orderItem, i) => renderItemHandler(orderItem, i))}
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => (idx > 5)}></OrderSettingStateFixedWrapper>
      </div>
    </DndProvider>
  )
}

export default OrderSettingState;