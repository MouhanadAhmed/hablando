import React from "react";
import styles from './styles.module.css'

const CatDesc = () => {
  return <div className={styles.descSection}>
    <p className={`${styles.descText} font-montserrat`}>CAT CARD is Dubai’s ultimate <span className="text-red-500 font-montserrat">membership program designed exclusively for TEACHERS.</span> As an educator, you dedicate your time and energy to shaping the future—now it’s time to enjoy some well-deserved benefits! </p>
  </div>;
};

export default CatDesc;