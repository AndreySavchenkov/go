import React from 'react';
import {Rocket} from "../../../../assets/icons";
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Rocket/>
      <span className={classes.footer__title}>Exciting space adventure!</span>
    </footer>
  );
};

export default Footer;