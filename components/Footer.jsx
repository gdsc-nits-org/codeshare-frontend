import React from "react";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={500} height={300} />
        </Link>
      </div>

      <div className={styles.quickLinks}>
        <ul className={styles.footerLinks}>
          <h3 className={styles.footerQuickLinks}>Quick Links</h3>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Editor</Link>
          </li>
          <li>
            <Link href="/contact">Team</Link>
          </li>
        </ul>
      </div>

      <div className={styles.gdsclogo}>
        <Link href="https://gdsc.community.dev/national-institute-of-technology-nit-silchar/">
          <Image src="/Gdsc logo.svg" width={250} height={100} />
        </Link>
      </div>
      <div className={styles.footerLine}></div>
      <p className={styles.footerCopyright}>
        ©Copyright 2024, National Institute Of Technology, Silchar
      </p>
    </footer>
  );
};

export default Footer;
