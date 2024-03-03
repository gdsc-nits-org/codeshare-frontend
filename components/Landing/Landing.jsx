import { useState } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close-circle-outline";
import styles from "./Landing.module.scss";
import { Editor } from "@monaco-editor/react";

const Landing = () => {
  const [hash, setHash] = useState("");
  function clearHash() {
    setHash("");
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
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Input"
              value={hash}
              className={styles.input}
              onChange={(e) => {
                setHash(e.target.value);
              }}
            />
            <Icon
              icon={closeIcon}
              className={styles.cross}
              onClick={clearHash}
            />
            <span className={styles.text}>Hash Code</span>
          </div>
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
        <div
          id="editor"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <span className={styles.welcome_text}>Save Your Code</span>
          <Editor height="60vh" width="70vw" theme="vs-dark" />
        </div>
      </div>
    </div>
  );
};
export default Landing;
