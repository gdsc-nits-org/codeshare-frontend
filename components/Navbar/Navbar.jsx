import { Icon } from "@iconify/react";
import cLogo from "@/public/images/c_logo.png";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={cLogo} width={60} alt="" />
        <span>odeshare</span>
      </div>
      <div className={styles.right}>
        <ul>
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <li>About Us</li>
          </Link>
          <Link href={"/#editor"} style={{ textDecoration: "none" }}>
            <li>Editor</li>
          </Link>
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <li>Team</li>
          </Link>
          <Link href={"/profile"} style={{ textDecoration: "none" }}>
            <li>
              <Icon
                icon="iconamoon:profile-circle-fill"
                className={styles.profile_icon}
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
