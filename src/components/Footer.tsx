import * as React from 'react';
import styles from './Footer.module.css'

interface Props {
}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <span>React + TS Todo</span> @2023
    </footer>
  );
};

export default Footer;
