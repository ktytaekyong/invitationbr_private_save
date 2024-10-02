/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import Button from "../layout/Button.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/LocationSettingAddress.module.css";

const addressEnterHandler = () => {

}
const LocationSettingAddress = () => {
  return (
    <>
      <div className={styles.option__input}>
        <input type="text" placeholder="주소 입력" />
        <Button content="검색" styleType="point"></Button>
      </div>
      {/* work: onChange -> map__wrap(active) */}
      <div className={styles.map__wrap}>
        <div className={styles.map}></div>
        <CheckItem id="locationViewOption" content="청첩장에 지도 표기"></CheckItem>
      </div>
    </>

  )
}

export default LocationSettingAddress;