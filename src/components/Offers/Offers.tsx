import React from 'react';
import classes from './Offers.module.scss';
import Card from "./components/Card/Card";
import {mockOffers} from "./mockOffers";


const Offers = () => {
  return (
    <div className={classes.offers}>
      <span className={classes.offers__title}>Offers</span>
      <div className={classes.offers__container}>
        {mockOffers.map((offer, index) => (
          <Card key={index} title={offer.title} subtitle={offer.subtitle} backgroundUrl={offer.backgroundUrl}
                isMiddle={index === 1 || index === 2}/>
        ))}
      </div>
    </div>
  );
};

export default Offers;