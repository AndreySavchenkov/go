import React from 'react';
import Button, {ButtonTypeEnum} from "../../../../ui/Button/Button";
import classes from './Information.module.scss';

const Information = () => {
  return (
    <div className={classes.information}>
      <span className={classes.information__title}>Discover the vast expanses of <span
        className={classes.information__title__pink}>space</span></span>
      <span className={classes.information__subtitle}>Where the possibilities are <span
        className={classes.information__subtitle__green}>endless!</span></span>
      <Button className={classes.information__button} type={ButtonTypeEnum.MAIN}>Learn more</Button>
    </div>
  );
};

export default Information;