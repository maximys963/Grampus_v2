import React from 'react';
import { Tabs } from 'antd';
import { useHistory, Switch, Route } from 'react-router';

import ProfileFooter from './ProfileFooter/ProfileFooter';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import Achievements from './Achivements/Achievements';
import HelpDeskItem from '../HelpDesk/HelpDeskItem/HelpDeskItem';

import styles from './Profile.module.sass';

const { TabPane } = Tabs;

function Profile() {
  const history = useHistory();

  const handleTabClick = (key) => {
    console.log('key', key);
    switch (key) {
      case '1': history.push('/main/profile/general');
        break;
      case '2': history.push('/main/profile/my-help-tasks');
        break;
      default: history.push('/main/profile/general');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile_body}>
        <>
          <ProfileFooter />
          <Tabs defaultActiveKey="1" onTabClick={handleTabClick}>
            <TabPane
              tab="General"
              key="1"
            />
            <TabPane
              tab="Tasks"
              key="2"
            />
          </Tabs>
        </>
        <Switch>
          <Route
            exact
            path="/main/profile/general"
            render={() => (
              <>
                <GeneralInfo />
                <Achievements />
              </>
            )}
          />
          <Route
            exact
            path="/main/profile/my-help-tasks"
            render={() => (
              <>
                <HelpDeskItem
                  status="pending"
                  title="Programmatically navigate using React router"
                  description="With react-router I can use the Link element to create links which are natively handled by react router."
                  id="1"
                  onClick={() => {}}
                />
              </>
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Profile;
