import React from 'react';
import Information from "./components/Information/Information";
import classes from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={classes.banner}>
      <Information/>
    </div>
  );
};

export default Banner;