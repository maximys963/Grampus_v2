import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import UserMenu from '../../components/UserMenu/UserMenu';

import Buses from './Buses/Buses';
import Taxi from './Taxi/Taxi';
import BlaBlaCar from './BlaBlaCar/BlaBlaCar';

import styles from './Traffic.module.sass';

const Traffic = (props) => (
  <div className={styles.container}>
    <UserMenu />
    <div className={styles.pages_container}>
      <Switch>
        <Route
          exact
          path="/traffic/buses"
          component={Buses}
        />
        <Route
          exact
          path="/traffic/taxi"
          component={Taxi}
        />
        <Route
          exact
          path="/traffic/blablacar"
          component={BlaBlaCar}
        />
      </Switch>
    </div>
  </div>
);

export default Traffic;
