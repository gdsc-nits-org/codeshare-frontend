import { Icon } from "@iconify/react";
import recent from "@iconify/icons-mdi/recent";
import clock from "@iconify/icons-mdi/clock-time-three-outline";
import dot from "@iconify/icons-mdi/dot";
import { ProfileCard } from "@/components";
import styles from "./profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <ProfileCard />
      </div>
      <div className={styles.recent}>
        <div className={styles.heading}>
          <Icon icon={recent} />
          Recently Visited
        </div>
        <div className={styles.list}>
          <div className={styles.section}>
            <div className={styles.code}>
              <Icon icon={dot} className={styles.dot} />
              <div className={styles.detail}>
                <span className={styles.hash}>#XYZ123</span>
                <span>R4inR3aper</span>
              </div>
            </div>
            <div className={styles.time}>
              <Icon icon={clock} />
              <span>3 Hrs Ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
