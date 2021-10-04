import React from 'react';
import { useHistory } from 'react-router';
import Lottie from 'react-lottie';
import { Input, Button } from 'antd';
import lottieAnimation from '../../assets/lottie/animation.json';

import styles from './Login.module.sass';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottieAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Login = (props) => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/main/profile/general');
  };

  const onNavigateToRegistration = () => {
    history.push('/registration');
  };

  return (
    <div className={styles.container}>
      <div className={styles.lottie_container}>
        <Lottie
          options={defaultOptions}
          height={600}
          width={600}
        />
      </div>
      <div className={styles.form_container}>
        <div className={styles.input_wrapper}>
          <div className={styles.input}>
            <Input placeholder="Email" />
          </div>
          <div className={styles.input}>
            <Input placeholder="Password" />
          </div>
          <div
            className={styles.sign_up}
            onClick={onNavigateToRegistration}
          >
            Registration
          </div>
          <Button
            onClick={onFinish}
            type="primary"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
