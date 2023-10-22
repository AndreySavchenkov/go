import React, {FC} from 'react';
import Button, {ButtonTypeEnum} from "../../../../ui/Button/Button";
import classes from './Card.module.scss';
import useWindowWidth from "../../../../hooks/useWindowWidth";

type CardPropsType = {
  title: string;
  subtitle: string;
  backgroundUrl: string;
  isMiddle?: boolean;
};

const Card: FC<CardPropsType> = ({title, subtitle, backgroundUrl, isMiddle}) => {
  const width = useWindowWidth();

  const cardStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };
  const fontStyleForMiddleCards = {
    fontSize: '48px',
    lineHeight: '48px',
  };

  const needChangeFontSize = isMiddle && (width > 1240);
  const titleStyle = needChangeFontSize ? fontStyleForMiddleCards : undefined;

  return (
    <div className={classes.card} style={cardStyle}>
      <div className={classes.card__info}>
        <span className={classes.card__title} style={titleStyle}>{title}</span>
        <span className={classes.card__subtitle}>{subtitle}</span>
        <Button className={classes.card__button} type={ButtonTypeEnum.SECONDARY}>Learn more</Button>
      </div>
    </div>
  );
};

export default Card;