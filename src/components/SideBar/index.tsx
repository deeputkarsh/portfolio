import React from 'react';
import { Home, Summarize, Person, Contacts } from '@mui/icons-material';
import {
  Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
import styles from './sidebar.module.scss';
import { useRouter } from 'next/router';

type PropType = {isOpen:boolean, onClose:()=>void}

const SideBar = ({ isOpen, onClose }:PropType) => {
  const router = useRouter()
  const listClasses = {
    button: styles.item,
    disabled: styles.activeLink
  };
  const links = [
    { label: 'Home', link: '/', Icon: Home },
    { label: 'Resume', link: '/resume', Icon: Summarize },
    { label: 'About', link: '/about', Icon: Person },
    { label: 'Contact', link: '/contact', Icon: Contacts }
  ];

  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <div className={styles.container} role="presentation" onClick={onClose}>
        <List className={styles.greetContainer}>
          <ListItem>
            <ListItemIcon>
              <div className={styles.logoContainer} />
            </ListItemIcon>
            <ListItemText primary={`Utkarsh Deep`} />
          </ListItem>
        </List>
        <List>
          {links.map(({ label, link, Icon }) => (
            <ListItemButton
              key={label}
              // components={{Root: Link}}
              href= {link}
              // componentsProps={{root: { href: link, className:listClasses, disabled: location.pathname === link }}}
              // slotProps={{root: {to: link}}}
              
              classes={listClasses}
              disabled={router.pathname === link}
            >
              <ListItemIcon><Icon color="secondary" /></ListItemIcon>
              <ListItemText classes={{ primary: styles.itemText }} primary={label} />
            </ListItemButton>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default SideBar;
