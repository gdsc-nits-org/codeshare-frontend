import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/c_logo.png" alt="" />
          <span>odeshare</span>
        </div>
        <div className={styles.right}>
          <ul>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <li>About Us</li>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <li>Editor</li>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <li>Team</li>
            </Link>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <li>
                <img src="/images/profile_icon.png" alt="" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
