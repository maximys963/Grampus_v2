import React from 'react';
import { Button } from 'antd';

import styles from './HelpdeskItem.module.sass';

function HelpDeskItem(props) {
  const { title, description } = props;
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h3 className={styles.title}>{title}</h3>
        <div>{description}</div>
      </div>
      <div className={styles.button_container}>
        <Button>Help</Button>
      </div>
    </div>
  );
}

export default HelpDeskItem;
