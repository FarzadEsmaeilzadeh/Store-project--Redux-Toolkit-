import { ThreeDots } from "react-loader-spinner";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <ThreeDots
        width="100px"
        height="100px"
        color="#fe5d42"
        wrapperClass={styles.loaderDots}
      />
    </div>
  );
}

export default Loader;
