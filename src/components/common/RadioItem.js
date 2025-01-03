/* Import */
import { useState, useEffect, useContext } from "react";
/* CSS Module */
import styles from "../../css/module/common/RadioItem.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 라디오 버튼
const RadioItem = ({ id, name, content, radioidx, radioChecked }) => {
  const { selectOptionList, setSelectOptionList, setNoticeTList, setNoticeDList, setOutroList, outroList } = useContext(SetContext);
  const [isChecked, setIsChecked] = useState(selectOptionList[name] === id);
  const checkedChangeHandler = (e) => {
    const { name, id } = e.target;
    setSelectOptionList((prev) => ({
      ...prev,
      [name]: id
    }));
  };
  
  const photoPositionChangeHandler = (e, idx, changer) => {
    const { name, id } = e.target;
    changer((prev) => (
      prev.map((item, previdx) => {
        if(idx === previdx) {
          if(name.includes("position")) {
            return {
              ...item,
              "position": id.includes("top") ? "top" : "bottom"
            }
          } else {
            return item;
          }
        } else {
          return item;
        }
      })
    ));
  };

  const photoPositionDChangeHandler = (e) => {
    const { name, id } = e.target;
    setNoticeDList((prev) => (
      prev.map((item) => {
        if(name.includes("Position")) {
          return {
            ...item,
            "position": id.includes("top") ? "top" : "bottom"
          }
        } else {
          return item;
        }
      })
    ));
    // console.log(noticeDList);
  };

  const outroChangeHandler = (e) => {
    const { id } = e.target;
    setOutroList((prev) => ({
      ...prev,
      "position": id.includes("top") ? "top" : "bottom"
    }));
    // console.log(outroList);
  };

  const functionChangeHandler = (e, name, idx) => {
    if(name === "effectRange" || name === "optionAttendPopup") {
      checkedChangeHandler(e);
      // console.log(selectOptionList);
    } else if(name.includes("DPosition")) {
      photoPositionDChangeHandler(e);
    } else if(name === "outroPosition") {
      outroChangeHandler(e);
    } else {
      photoPositionChangeHandler(e, idx)
    }
  }
  useEffect(() => {
    setIsChecked(selectOptionList[name] === id);
  }, [selectOptionList, name, id, isChecked]);
  return (
    <div className={styles.radio__item}>
      <input 
        type="radio" 
        name={name} 
        id={id} 
        value={id} 
        checked={radioChecked ? radioChecked : isChecked} 
        onChange={(e) => functionChangeHandler(e, name, radioidx)}
      />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default RadioItem;