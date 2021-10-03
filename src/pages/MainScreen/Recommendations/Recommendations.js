import React from 'react';
import {
  Input, Upload, message, Button,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './Recommendations.module.sass';

function Recommendations() {
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Add CV</div>
    </div>
  );

  const handleSubmit = () => {
    message.success('Thank you for recommendation !');
  };

  return (
    <div className={styles.container}>
      <div className={styles.recommendations_body}>
        <div className={styles.form_container}>
          <h2>Recommend your friends and gain 100 points</h2>
          <Input
            className={styles.input}
            placeholder="Project"
          />
          <Input
            className={styles.input}
            placeholder="Name"
          />
          <Input
            className={styles.input}
            placeholder="Surname"
          />
          <Input
            className={styles.input}
            placeholder="Position"
          />
          <div className={styles.upload_container}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              onChange={() => {}}
            >
              { uploadButton }
            </Upload>
          </div>
          <Button
            style={{ width: '200px' }}
            onClick={handleSubmit}
          >
            Recommend
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
