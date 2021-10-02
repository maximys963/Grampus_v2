import React from 'react';
import ProfileFooter from './ProfileFooter/ProfileFooter';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import Achievements from './Achivements/Achievements';

import styles from './Profile.module.sass';

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profile_body}>
        <ProfileFooter />
        <GeneralInfo />
        <Achievements />
      </div>
    </div>
  );
}

export default Profile;
