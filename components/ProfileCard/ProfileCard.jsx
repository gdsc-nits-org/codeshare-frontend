import React, { useContext, useEffect } from "react";
import { UserContext } from "@/context/auth/UserContext";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import instagram from "@iconify/icons-mdi/instagram";
import facebook from "@iconify/icons-mdi/facebook";
import linkedin from "@iconify/icons-mdi/linkedin";
import Link from "next/link";
import Image from "next/image";
import classes from "./ProfileCard.module.scss";
import { getAuth, signOut } from "firebase/auth";

const ProfileCard = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
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
  }, [auth, setUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.profileCard}>
      {user && user.profilePic && (
        <Image
          src={user.profilePic}
          className={classes.profilePic}
          alt=""
          width={200}
          height={200}
        />
      )}
      <div className={classes.info}>
        {user && (
          <>
            <div>{user.name}</div>
            <div>About</div>
            <div className={classes.button}>Edit Profile</div>
            <div onClick={handleLogout} className={classes.button}>
              Logout
            </div>
          </>
        )}
      </div>
      <div className={classes.profileCard_icons}>
        <Link href="#">
          <Icon icon={instagram} />
          instagram/link
        </Link>
        <Link href="#">
          <Icon icon={facebook} />
          facebook/link
        </Link>
        <Link href="#">
          <Icon icon={linkedin} />
          linkedin/link
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
