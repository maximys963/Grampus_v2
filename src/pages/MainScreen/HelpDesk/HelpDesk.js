import React, { useState } from 'react';
import { Divider } from 'antd';
import HelpDeskItem from './HelpDeskItem/HelpDeskItem';

import styles from './HelpDesk.module.sass';

const HELP_TASK_MAP = [
  {
    title: 'Create Button',
    description: 'Lorem ipsum dolor, sit amet ...',
  },
  {
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor, sit amet ...',
  },
];

function HelpDesk() {
  const [ helpDeskCollection, setHelpDeskCollection ] = useState(HELP_TASK_MAP);

  const handleDeleteItem = (id) => {


  }

  return (
    <div className={styles.container}>
      <div className={styles.help_desk_body}>
        { HELP_TASK_MAP.map((task) => (
          <>
            <HelpDeskItem
              title={task.title}
              description={task.description}
            />
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
}

export default HelpDesk;
