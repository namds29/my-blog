import Image from "next/image";
import styles from "../styles/Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left_side}>
        <Image src="/logo.png" alt=" " layout="fill" />
      </div>
      <div className={styles.right_side}>
        <button className={styles.btn_style}>Login</button>
      </div>
    </div>
  );
};
