import React from 'react';
import userAvatar from '../../../../assets/img/eminem.jpeg';
import styles from './ProfileFooter.module.sass';

function ProfileFooter() {
  return (
    <div className={styles.container}>
      <img
        src={userAvatar}
        className={styles.avatar}
      />
      <h2 className={styles.name_text}>Marshall Mathers</h2>
      <div className={styles.position}>
        Front-end developer
      </div>
    </div>
  );
}

export default ProfileFooter;
