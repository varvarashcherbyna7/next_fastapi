import Image from 'next/image';
import React from 'react';
import styles from './Card.module.css';

export interface ICard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const Card: React.FC<ICard> = ({ tag, title, body, author, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="/images/girls.jpeg"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4 className={styles.fontColor}>{title}</h4>
          <p className={styles.fontColor}>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="/images/girl.jpeg"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5 className={styles.fontColor}>{author}</h5>
              <small className={styles.fontColor}>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
