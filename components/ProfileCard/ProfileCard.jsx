import { Icon } from "@iconify/react";
import instagram from "@iconify/icons-mdi/instagram";
import facebook from "@iconify/icons-mdi/facebook";
import linkedin from "@iconify/icons-mdi/linkedin";
import Link from "next/link";
import Image from "next/image";
import profileDemo from "@/public/Images/profileDemo.jpg";
import classes from "./profileCard.module.scss";

export default function profileCard({
  name = "Name",
  about = "About",
  profilePic = profileDemo,
}) {
  return (
    <div className={classes.profileCard}>
      <Image src={profileDemo} className={classes.profilePic} alt="" />
      <div className={classes.info}>
        <div>{name}</div>
        <div>{about}</div>
        <div className={classes.button}>Edit Profile</div>
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
}
