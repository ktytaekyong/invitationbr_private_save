/* CSS Module */
import styles from "../../css/module/common/CommonOptionContent.module.css";

const CommonOptionContent = ({ children }) => {
  return (
    <div className={styles.option__content}>
      {children}
    </div>
  )
}

export default CommonOptionContent;