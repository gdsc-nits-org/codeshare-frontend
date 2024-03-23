"use client";

import { Icon } from "@iconify/react";
import cLogo from "@/public/images/c_logo.png";
import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "@/config";
import { useRouter } from "next/router";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          name: user.displayName,
          profilePic: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
            {user ? (
              <Link href={"/profile"} style={{ textDecoration: "none" }}>
                <li>
                  <Icon
                    icon="iconamoon:profile-circle-fill"
                    className={styles.profile_icon}
                  />
                </li>
              </Link>
            ) : (
              <li>
                <button onClick={handleGoogleSignIn} className={styles.btnn}>
                  Sign in with Google
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
