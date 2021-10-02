import React from 'react';
import userAvatar from '../../../../assets/img/maxim.jpg';
import styles from './ProfileFooter.module.sass';

function ProfileFooter() {
  return (
    <div className={styles.container}>
      <img
        src={userAvatar}
        className={styles.avatar}
      />
      <h2 className={styles.name_text}>Pansenko Maksym</h2>
      <div className={styles.position}>
        Front-end developer
      </div>
    </div>
  );
}

export default ProfileFooter;
