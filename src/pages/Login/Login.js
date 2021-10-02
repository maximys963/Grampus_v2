import React from 'react';
import { useHistory } from 'react-router';
import {
  Form, Input, Button, Checkbox,
} from 'antd';

import styles from './Login.module.sass';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = (props) => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/main/profile');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onNavigateToRegistration = () => {
    history.push('/registration');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Grampus</div>
      <div className={styles.login_form}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Логін"
            name="username"
            rules={[
              {
                required: true,
                message: 'Будь ласка заповніть логін',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Будь ласка заповніть пароль',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <div className={styles.registration_container}>
            <div
              role="button"
              onClick={onNavigateToRegistration}
              className={styles.registration}
            >
              Ще не зареєструвались ?
            </div>
          </div>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Запам&apos;ятати мене</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Увійти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
