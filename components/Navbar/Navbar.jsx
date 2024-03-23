"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
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
        setUser(user);
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
            {user ? (
              <li>
                <img src="/images/profile_icon.png" alt="" />
              </li>
            ) : (
              <li>
                <button onClick={handleGoogleSignIn}>
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
