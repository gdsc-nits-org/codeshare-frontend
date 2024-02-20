import React from "react";
import styles from "./Landing.module.scss";

export default function Landing() {
  function clearText() {
    let text = document.querySelector("input");
    if (text) {
      text.value = " ";
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <span className={styles.welcome_text}>Welcome to CodeShare</span>
        <div className={styles.welcome_description}>
          Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.Gorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis.
        </div>
        <div className={styles.buttons_search}>
          <button className={styles.button}>Search</button>
          <input type="text" placeholder="Input" className={styles.input} />
          <img
            src="/images/cross_icon.png"
            className={styles.cross}
            onClick={clearText}
            alt=""
          />
        </div>
      </div>
      <div className={styles.welcome}>
        <span className={styles.welcome_text}>About Us</span>
        <div className={styles.welcome_description}>
          Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.Gorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis.
        </div>
      </div>
    </div>
  );
}
