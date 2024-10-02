/* CSS Module */
import styles from "../../css/module/common/ListOptionContent.module.css";

const ListOptionContent = ({ children }) => {
  return (
    <div className={styles.option__content}>
      {children}
    </div>
  )
}

export default ListOptionContent;