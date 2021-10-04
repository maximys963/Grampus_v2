import React, { useState } from 'react';
import {
  Menu, Dropdown, Button, message,
} from 'antd';
import { DownOutlined, CheckOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

import danielImg from '../../../assets/img/collegues/daniel.jpeg';
import opra from '../../../assets/img/collegues/oprah.jpeg';
import kingImg from '../../../assets/img/collegues/king_s.jpeg';
import lanaDelRayImg from '../../../assets/img/collegues/lana_del_ray.jpeg';

import styles from './Questionnairie.module.sass';

const COLLEAGUES_MAP = [
  {
    id: uuidv4(),
    name: 'Daniel Radcliffe',
    imageUrl: danielImg,
  },
  {
    id: uuidv4(),
    name: 'Lana del Ray',
    imageUrl: lanaDelRayImg,
  },
  {
    id: uuidv4(),
    name: 'Oprah Winfrey',
    imageUrl: opra,
  },
  {
    id: uuidv4(),
    name: 'Steven King',
    imageUrl: kingImg,
  },
];

function Questionnaire() {
  const [colleaguesCollection, setColleaguesCollection] = useState(COLLEAGUES_MAP);

  const handleMenuClick = (id) => {
    message.success('Thank you for choice!');
    setColleaguesCollection(colleaguesCollection.filter((item) => item.id !== id));
  };

  const menu = (id) => (
    <Menu onClick={() => handleMenuClick(id)}>
      <Menu.Item key="1" icon={<CheckOutlined />}>
        Comes to work always on time
      </Menu.Item>
      <Menu.Item key="2" icon={<CheckOutlined />}>
        Dresses very well
      </Menu.Item>
      <Menu.Item key="3" icon={<CheckOutlined />}>
        Responsible
      </Menu.Item>
      <Menu.Item key="4" icon={<CheckOutlined />}>
        Performs tasks on time
      </Menu.Item>
      <Menu.Item key="5" icon={<CheckOutlined />}>
        Learns quickly
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.container}>
      <div className={styles.questionnaire_body}>
        {colleaguesCollection.map((colleague) => (
          <div className={styles.collection_item_container}>
            <div className={styles.avatar_container}>
              <img
                className={styles.avatar}
                src={colleague.imageUrl}
              />
              <div className={styles.user_name_container}>{colleague.name}</div>
            </div>
            <div>
              <Dropdown overlay={menu(colleague.id)}>
                <Button>
                  Choose the most accurate characteristic
                  {' '}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questionnaire;
