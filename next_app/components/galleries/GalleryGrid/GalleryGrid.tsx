import React, { useState } from 'react';
import Image from 'next/image';
import styles from './GalleryGrid.module.css';

export interface IGalleryGrid {}

interface IGalleryData {
  url: string;
  description: string;
  title: string;
  isOpen: boolean;
}

const galleryData = [
  {
    url: '/image/1.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/2.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/3.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/4.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/5.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/6.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/7.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/images/8.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/9.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/10.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/11.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/12.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/13.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/14.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/images/15.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/16.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/17.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/18.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
  {
    url: '/image/19.jpeg',
    description: 'text',
    title: 'title',
    isOpen: false,
  },
];

const GalleryGrid: React.FC<IGalleryGrid> = () => {
  const [data, setData] = useState<IGalleryData[]>(galleryData);

  const togglePhoto = (i: number) => {
    setData(
      data.map((item, index) => {
        if (i === index) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
        return item;
      })
    );
  };

  // closePhoto(index)

  console.log(' data ', data);

  return (
    <div className={styles.containerGalleryGrid}>
      <div id={styles.gallery}>
        {data.map((photo, index) => {
          return (
            <div key={index} onClick={() => togglePhoto(index)}>
              <Image
                src={photo.url}
                alt={`photo${index}`}
                width={500}
                height={500}
              />
              {/* href={`#${styles.lightbox + '-' + index + 1}`} */}
              <div className={styles.description}>{photo.description}</div>
            </div>
          );
        })}
      </div>

      {data.map((photo, index) => {
        return (
          <div
            key={index}
            className={`${
              photo.isOpen ? styles.lightbox : styles.lightboxHidden
            }`}
            onClick={() => togglePhoto(index)}
            // id={`${styles.lightbox + '-' + index + 1}`}
          >
            <div className={styles.content}>
              <Image
                src={photo.url}
                alt={`photo${index}`}
                width={500}
                height={500}
              />
              <div className={styles.title}>
                <b>{index + 1}</b> {photo.title}
              </div>
              <div
                className={styles.close}
                // href={`#${styles.gallery}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryGrid;
