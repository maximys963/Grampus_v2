import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Divider } from 'antd';
import HelpDeskItem from './HelpDeskItem/HelpDeskItem';

import styles from './HelpDesk.module.sass';

const HELP_TASK_MAP = [
  {
    id: uuidv4(),
    title: 'Fetch blob in backend and send to front end',
    description: 'I am trying to fetch a blob in the form of a media/gif and then immediately send it to my front-end.'
      + ' I need to first fetch it in my back-end (serverless function in Vercel) for security and caching purposes. '
      + 'When fetching the blob/image directly from the source URL in Postman and in my front-end everything works,'
      + ' but when first fetching it in my backend and then passing it to Postman and my front-end it does not work.',
  },
  {
    id: uuidv4(),
    title: 'Skipping getline()',
    description: 'I\'ve encountered a problem with getline(). I\'ve googled it and checked multiple pages, but '
      + 'those answers aren\'t meant for newbies like me.',
  },
  {
    id: uuidv4(),
    title: 'Apis are not working on old Android devices (Android 7 or less) in React Native using axios but working in new devices',
    description: 'I used \'axios\' library to fetch the data. It is working perfect on new Android devices'
      + ' (Android 9 & 10) but on old devices (Android 7 or less) it always gives Network Error like this:'
      + ' [ Error: Network Error] it seems like the devices could not establish a connection with the https URL.',
  },
  {
    id: uuidv4(),
    title: 'Best size for website for desktop tablet and mobile',
    description: 'I am new to web development. What is the best size for making website for desktop, mobile and tablet?',
  },
];

function HelpDesk() {
  const [helpDeskCollection, setHelpDeskCollection] = useState(HELP_TASK_MAP);

  const handleDeleteItem = (id) => {
    setHelpDeskCollection(helpDeskCollection.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.help_desk_body}>
        { helpDeskCollection.map((task) => (
          <>
            <HelpDeskItem
              key={task.id}
              id={task.id}
              onClick={handleDeleteItem}
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
