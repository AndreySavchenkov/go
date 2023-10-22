import React from 'react';
import Button, {ButtonTypeEnum} from "../../ui/Button/Button";
import classes from './Info.module.scss';

const Info = () => {
  return (
    <div className={classes.info}>
      <span className={classes.info__title}>Embark on a space journey</span>
      <p className={classes.info__text}>
        Travelling into space is one of the most exciting and unforgettable adventures that can change your life
        forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to
        help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see
        all the secrets of the universe. We guarantee that every moment in space will be filled with incredible
        impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so
        that you can fully enjoy your adventure in space. We offer various options for space excursions.
      </p>
      <Button className={classes.info__button} type={ButtonTypeEnum.TEXT}>Read more</Button>
    </div>
  );
};

export default Info;