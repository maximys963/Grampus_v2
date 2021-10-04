import {
  Form, Input, Button,
} from 'antd';

import React from 'react';
import { useHistory } from 'react-router';

import styles from './Registration.module.sass';

const validateMessages = {
  required: '${label} required',
  types: {
    email: 'Email is not valid',
  },
  string: {
    range: '${label} should be min ${min} symbols',
  },
};

const layout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 16,
  },
};

const Registration = (props) => {
  const history = useHistory();

  const onFinish = () => {
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Registration</div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="repeat password" label="Confirm passsword" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
