import React from 'react';

import styles from './Achievement.module.sass';

function Achievement(props) {
  const { src, title } = props;
  return (
    <div className={styles.container}>
      <img src={src} className={styles.achievement_img} />
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
}

export default Achievement;
