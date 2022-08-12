import arrowBack from '@iconify/icons-bx/arrow-back';
import searchIcon from '@iconify/icons-bx/search';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
  };

  const closeBurgerMenu = () => {
    setIsActive(false);
  };

  const openSearch = () => {
    setIsActiveSearch(true);
  };

  const closeSearch = () => {
    setIsActiveSearch(false);
  };

  // Open and Close Search Bar Toggle
  //   const searchBlock: any = document.querySelector('.search-block');
  //   const searchToggle: any = document.querySelector('.search-toggle');
  //   const searchCancel: any = document.querySelector('.search-cancel');

  //   if (searchToggle && searchCancel) {
  //     searchToggle.addEventListener('click', () => {
  //       searchBlock.classList.add('is-active');
  //     });

  //     searchCancel.addEventListener('click', () => {
  //       searchBlock.classList.remove('is-active');
  //     });
  //   }

  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.navbar} ${styles.container}`}>
        {/* <a href="./index.html" className="brand">
          Brand
        </a> */}
        <Link href="/">
          <a className={styles.brand}>Brand</a>
        </Link>
        <div className={styles.burger} id="burger" onClick={toggleBurgerMenu}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </div>
        <span
          className={
            isActive
              ? `${styles.overlay} ${styles.isActive}`
              : `${styles.overlay}`
          }
          onClick={toggleBurgerMenu}
        ></span>
        <div
          className={
            isActive ? `${styles.menu} ${styles.isActive}` : `${styles.menu}`
          }
          id="menu"
        >
          <ul className={styles.menuInner}>
            <li className={styles.menuItem} onClick={closeBurgerMenu}>
              <Link href="/">
                <a className={styles.menuLink}>Home</a>
              </Link>
            </li>
            <li className={styles.menuItem} onClick={closeBurgerMenu}>
              <Link href="/about">
                <a className={styles.menuLink}>About</a>
              </Link>
            </li>
            <li className={styles.menuItem} onClick={closeBurgerMenu}>
              <Link href="/service">
                <a className={styles.menuLink}>Service</a>
              </Link>
            </li>
            <li className={styles.menuItem} onClick={closeBurgerMenu}>
              <Link href="/project">
                <a className={styles.menuLink}>Project</a>
              </Link>
            </li>
            <li className={styles.menuItem} onClick={closeBurgerMenu}>
              <Link href="/support">
                <a className={styles.menuLink}>Support</a>
              </Link>
            </li>
          </ul>
        </div>
        <span>
          <Icon
            icon={searchIcon}
            className={styles.searchToggle}
            onClick={openSearch}
          />
        </span>
        <div
          className={
            isActiveSearch
              ? `${styles.searchBlock} ${styles.isActive}`
              : `${styles.searchBlock}`
          }
        >
          <form className={styles.searchForm}>
            <span>
              <Icon
                icon={arrowBack}
                className={styles.searchCancel}
                onClick={closeSearch}
              />
            </span>
            <input
              type="search"
              name="search"
              className={styles.searchInput}
              placeholder="Search here..."
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default SidebarLayout;
