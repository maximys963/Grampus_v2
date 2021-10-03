import React from 'react';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import pagPackImg from '../../../assets/img/merch/bagPack.png';
import beltPackImg from '../../../assets/img/merch/beltPack.jpg';
import capImg from '../../../assets/img/merch/cap.webp';
import nauTShirtImg from '../../../assets/img/merch/nau.jpeg';

import styles from './Merch.module.sass';

const MERCH_MAP = [
  {
    id: uuidv4(),
    name: 'Backpack',
    img: pagPackImg,
    price: '100 points',
  },
  {
    id: uuidv4(),
    name: 'Beltpack',
    img: beltPackImg,
    price: '30 points',
  },
  {
    id: uuidv4(),
    name: 'Winter Cap',
    img: capImg,
    price: '40 points',
  },
  {
    id: uuidv4(),
    name: 'T-Shirt',
    img: nauTShirtImg,
    price: '50 points',
  },
];

function Merch() {
  const handleClick = (name) => {
    message.success(`${name} successfully reserved for you`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.merch_body}>
        {
          MERCH_MAP.map((card) => (
            <div
              key={card.id}
              className={styles.merch_card}
            >
              <img
                src={card.img}
                className={styles.img}
              />
              <div>{card.name}</div>
              <Button
                onClick={() => handleClick(card.name)}
                className={styles.button}
                icon={<DollarCircleOutlined />}
                type="primary"
              >
                {card.price}
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Merch;
