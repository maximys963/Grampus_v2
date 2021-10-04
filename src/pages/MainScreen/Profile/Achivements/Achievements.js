import React from 'react';
import { Divider } from 'antd';
import Achievement from './Achievement/Achievement';
import helpImg from '../../../../assets/img/achivements/help.svg';
import recommendationImg from '../../../../assets/img/achivements/recomendation.svg';
import timeWizardImg from '../../../../assets/img/achivements/wizard.svg';
import fashionStarImg from '../../../../assets/img/achivements/male-clothes.svg';
import lordOfResponsibilityImg from '../../../../assets/img/achivements/king.svg';
import terminatorImg from '../../../../assets/img/achivements/robot.svg';
import fastLearnerImg from '../../../../assets/img/achivements/book.svg';

import styles from './Achievements.module.sass';

const ACHIEVEMENTS_MAP = [
  {
    src: helpImg,
    title: 'Help master',
  },
  {
    src: recommendationImg,
    title: 'Super HR',
  },
  {
    src: timeWizardImg,
    title: 'Time Wizard',
  },
  {
    src: fashionStarImg,
    title: 'Fashion Star',
  },
  {
    src: lordOfResponsibilityImg,
    title: 'Lord of Responsibility',
  },
  {
    src: terminatorImg,
    title: 'Terminator',
  },
  {
    src: fastLearnerImg,
    title: 'Fast learner',
  },
];

function Achievements() {
  return (
    <div className={styles.container}>
      <Divider orientation="left">Achievements</Divider>
      <div className={styles.collection}>
        {ACHIEVEMENTS_MAP.map((achievement) => (
          <div className={styles.achievement_wrapper}>
            <Achievement src={achievement.src} title={achievement.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
