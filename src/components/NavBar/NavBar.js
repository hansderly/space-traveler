import React from 'react';

import styles from './NavBar.module.css';

const NavBar = () => (
  <header className={styles.navbar}>
    <div className={styles.headerLogo}>
      <img src="/assets/planet.png" alt="logo" />
      <span>Space Travelers Hub</span>
    </div>
    <nav className={styles.nav}>
      <ul>
        <li>Rocket</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
