import React, { useState } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { Menu } from 'antd';

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const UserMenu = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const history = useHistory();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256, height: '100vh' }}>
      <Menu.Item
        role="button"
        onClick={() => history.push('/main/profile/general')}
        key="1"
      >
        Profile
      </Menu.Item>
      <Menu.Item
        role="button"
        onClick={() => history.push('/main/help-desk')}
        key="2"
      >
        Help Tasks
      </Menu.Item>
      <Menu.Item
        role="button"
        onClick={() => history.push('/main/recommendations')}
        key="3"
      >
        Recommendations
      </Menu.Item>
      <Menu.Item
        role="button"
        onClick={() => history.push('/main/questionnaire')}
        key="4"
      >
        Questionnaire
      </Menu.Item>
      <Menu.Item
        role="button"
        onClick={() => history.push('/main/analytics')}
        key="5"
      >
        Analytics
      </Menu.Item>
      <Menu.Item
        role="button"
        onClick={() => history.push('/main/merch')}
        key="6"
      >
        Merch
      </Menu.Item>
      <Menu.Item
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        role="button"
        onClick={() => history.push('/')}
        key="7"
      >
        LogOut
        <LogoutOutlined />
      </Menu.Item>
    </Menu>
  );
};

export default UserMenu;
