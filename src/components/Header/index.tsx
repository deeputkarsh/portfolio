import React, { useContext, useState } from 'react';
import { Dehaze } from '@mui/icons-material';
import styles from './header.module.scss';
import SideBar from '../SideBar';
import { ScrollContext } from '@self/utils/scroll-tracker';

export default function Header() {
  const [isSideBarOpen, toggleSideBar] = useState(false);
  const scrollState = useContext(ScrollContext)
  const isScrolled = scrollState !== 'Top'
  return (
    <header className={`${styles.headerWrapper} ${isScrolled ? styles.scrolled : ''}`}>
      <Dehaze className={styles.burgerIcon} onClick={() => toggleSideBar(true)} />
      <SideBar isOpen={isSideBarOpen} onClose={() => toggleSideBar(false)} />
    </header>
  );
}
