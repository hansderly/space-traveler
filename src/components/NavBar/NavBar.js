import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const { pathname: currentLocation } = useLocation();
  return (
    <header className={styles.navbar}>
      <div className={styles.headerLogo}>
        <img src="/assets/planet.png" alt="logo" />
        <span>Space Travelers Hub</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><NavLink to="/Rocket" style={({ isActive }) => ({ textDecoration: isActive || currentLocation === '/' ? 'underline' : 'none' })}>Rocket</NavLink></li>
          <li><NavLink to="/Mission" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Missions</NavLink></li>
          <li><NavLink to="/Profile" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>My Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
