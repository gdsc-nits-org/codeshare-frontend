"use Client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileDemo from "@/public/Images/profileDemo.jpg";
// import profileDemo from "@/.next/cache/images/Z7kgup-t1yguKVH9j8+Ma1oiYUCmtzFkxl8kuWwD7EQ="
import classes from "@/components/profile/profileCard.module.scss";

const profileCard = () => {
  return (
    <div className={classes.profileCard}>
      <Image src={profileDemo} className={classes.profilePic} alt="" />
      <ul>
        <li>Name</li>
        <li>About</li>
      </ul>
      <button>Edit Profile</button>
      <div className={classes.profileCard_icons}>
        <div>
          <Link href="">
            <Image src="" alt="" />
            Instagram/link
          </Link>
        </div>
        <div>
          <Link href="">
            <Image src="" alt="" />
            facebook/link
          </Link>
        </div>
        <div>
          <Link href="">
            <Image src="" alt="" />
            twitter/link
          </Link>
        </div>
      </div>
    </div>
  );
};
export default profileCard;
