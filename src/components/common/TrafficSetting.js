/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import ListOptionContent from "./ListOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import TextEditor from "./TextEditor.js";
/* CSS Module */
// import styles from "../../css/module/common/TrafficSetting.module.scss";
/* Context */
import { LocationContext } from "../../store/option-location-context.js";

const TrafficSetting = () => {
  const { trafficList, setTrafficList } = useContext(LocationContext);
  const trafficAddHandler = () => {
    setTrafficList((prev) => {
      return [...prev, 
        {
          "traffic": "",
          "content": ""
        },
      ]
    })
  }
  const trafficRemoveHandler = (removeidx) => {
    setTrafficList(() => {
      return [...trafficList].filter((_, listidx) => listidx !== removeidx);
    })
  }
  return (
    <ListOptionContent>
      {
        trafficList.map((item, idx) => (
        <CommonItemWrapper key={`${item}${idx}`}>
          <CommonItemContent title="교통수단" multi={true}>
            <input type="text" value={item.traffic} placeholder="교통수단명을 입력하세요. (ex : 지하철/버스/자가용)" />
            <TextEditor textValue={item.content}></TextEditor>
            <Button type="button" content="교통수단 삭제" styleType="remove" onClick={() => trafficRemoveHandler(idx)} />
          </CommonItemContent>
        </CommonItemWrapper>
        ))
      }
      <ButtonWrapper styleType="center">
        <Button type="button" content="교통수단 추가" styleType="point" onClick={trafficAddHandler} />
      </ButtonWrapper>
    </ListOptionContent>

  )
}

export default TrafficSetting;