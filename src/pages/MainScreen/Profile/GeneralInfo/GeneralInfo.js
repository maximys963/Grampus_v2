import React from 'react';
import { Divider } from 'antd';

import styles from './GeneralInfo.module.sass';

function GeneralInfo() {
  return (
    <div className={styles.container}>
      <Divider orientation="left">General</Divider>
      <div className={styles.details_container}>
        <b>Points Score: 50</b>
      </div>
      <div className={styles.details_container}>
        <b>Work anniversary:</b>
        {' '}
        10 April 2020
      </div>
      <div className={styles.details_container}>
        <b>Birth date:</b>
        {' '}
        22 November 1996
      </div>
      <div className={styles.details_container}>
        <b>University:</b>
        {' '}
        National Aviation University
      </div>
      <div className={styles.details_container}>
        <b>Corporate Email:</b>
        {' '}
        181444@stud.nau.edu.ua
      </div>
    </div>
  );
}

export default GeneralInfo;
