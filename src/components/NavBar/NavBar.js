import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <header className={styles.navbar}>
    <div className={styles.headerLogo}>
      <img src="/assets/planet.png" alt="logo" />
      <span>Space Travelers Hub</span>
    </div>
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/Rocket">Rocket</Link></li>
        <li><Link to="/Mission">Missions</Link></li>
        <li>My Profile</li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
