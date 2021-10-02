import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import UserMenu from '../../components/UserMenu/UserMenu';
import Analytics from './Analytics/Analytics';
import HelpDesk from './HelpDesk/HelpDesk';
import Profile from './Profile/Profile';
import Questionnaire from './Questionnaire/Questionairie';
import Recommendations from './Recommendations/Recommendations';

import styles from './MainScreen.module.sass';

const MainScreen = () => (
  <div className={styles.container}>
    <UserMenu />
    <div className={styles.pages_container}>
      <Switch>
        <Route
          exact
          path="/main/profile"
          component={Profile}
        />
        <Route
          exact
          path="/main/questionnaire"
          component={Questionnaire}
        />
        <Route
          exact
          path="/main/recommendations"
          component={Recommendations}
        />
        <Route
          exact
          path="/main/help-desk"
          component={HelpDesk}
        />
        <Route
          exact
          path="/main/analytics"
          component={Analytics}
        />
      </Switch>
    </div>
  </div>
);

export default MainScreen;
