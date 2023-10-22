import React, {FC} from 'react';
import classes from "./AdaptiveMenu.module.scss";
import {Close, HoverShop, Shop} from "../../../../../../assets/icons";

type AdaptiveMenu = {
  toggleMenu: () => void;
  navigationItems: string[];
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isHover: boolean;
}

const AdaptiveMenu: FC<AdaptiveMenu> = ({toggleMenu, navigationItems, handleMouseEnter, handleMouseLeave, isHover}) => {
  return (
    <div className={classes.menu}>
      <div onClick={toggleMenu} className={classes.menu__icon}>
        <Close/>
      </div>
      {navigationItems.map((item, index) => (
        <div key={index} className={classes.menu__item}>{item}</div>
      ))}
      <div className={classes.menu__item}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        {isHover ? <HoverShop/> : <Shop/>}
      </div>
    </div>
  );
};

export default AdaptiveMenu;