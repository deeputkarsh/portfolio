import React, { useContext } from 'react';
import styles from './footer.module.scss';
import { ScrollContext } from '@self/utils/scroll-tracker';

export default function Footer() {
  const scrollState = useContext(ScrollContext)
  const bottomScrolled = scrollState === 'Bottom'
  return (
    <footer className={`${styles.footerWrapper} ${bottomScrolled ? styles.scrolled : ''}`}>
      Developed by Utkarsh and hosted on AWS
    </footer>
  );
}
