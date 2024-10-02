/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import CoupleInfomationSettingBasic from "./CoupleInfomationSettingBasic.js";
import CoupleInfomationSettingParents from "./CoupleInfomationSettingParents.js";
import SettingNotice from "../layout/SettingNotice.js"
import SettingNoticeContent from "../layout/SettingNoticeContent.js"
import Button from "../layout/Button.js"
import CheckItem from "./CheckItem.js";
/* CSS Module */
// const parents = ["아버지", "어머니"];
const parents = [
  {
    itemName: "아버지",
    itemKey: "Father"
  },
  {
    itemName: "어머니",
    itemKey: "Mother"
  }
];
const CoupleInfomation = () => {
  const [isActive, setIsActive] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }

  return (
    <CommonOptionWrapper>
      <CommonOptionContent>

        <CommonItemWrapper>
          <CommonItemContent title="신랑">
            <CoupleInfomationSettingBasic couple="신랑" coupleKey="M"></CoupleInfomationSettingBasic>
          </CommonItemContent>
          {parents.map((parent) => (
            <CommonItemContent title={parent.itemName}>
              <CoupleInfomationSettingParents itemKey={parent.itemKey} name={parent.itemName} coupleKey="M"></CoupleInfomationSettingParents>
            </CommonItemContent>
          ))}
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>

        <CommonItemWrapper>
          <CommonItemContent title="신부">
            <CoupleInfomationSettingBasic couple="신부" coupleKey="F"></CoupleInfomationSettingBasic>
          </CommonItemContent>
          {parents.map((parent) => (
            <CommonItemContent title={parent.itemName}>
              <CoupleInfomationSettingParents itemKey={parent.itemKey} name={parent.itemName} coupleKey="F"></CoupleInfomationSettingParents>
            </CommonItemContent>
          ))}
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="故人 표기" multi="check">
            <CheckItem id="depF" content="국화꽃으로 표기" />
            <SettingNotice>
              <SettingNoticeContent>아버지, 어머지 정보는 미 입력 시 표기되지 않습니다.</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>
        {/* Notice로 */}
        {/* 국화꽃 표기 방법 생각 */}
        {/* 아마 context 하면 되지 않을까 */}
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default CoupleInfomation;