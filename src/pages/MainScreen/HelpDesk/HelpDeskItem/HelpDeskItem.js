import React from 'react';
import { Button } from 'antd';

import styles from './HelpdeskItem.module.sass';

function HelpDeskItem(props) {
  const {
    status,
    title,
    description,
    id,
    onClick,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h3 className={styles.title}>{title}</h3>
        <div>{description}</div>
      </div>
      <div className={styles.button_container}>
        <Button
          type={status === 'pending' ? 'secondary' : 'primary'}
          onClick={() => onClick(id)}
        >
          {status === 'pending' ? 'Pending approvement' : 'Help'}
        </Button>
      </div>
    </div>
  );
}

export default HelpDeskItem;
