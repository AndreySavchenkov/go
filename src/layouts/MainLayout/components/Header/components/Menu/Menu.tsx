import React, {FC} from 'react';
import classes from "./Menu.module.scss";
import {HoverShop, Shop} from "../../../../../../assets/icons";

type MenuPropsType = {
  navigationItems: string[];
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  isHover: boolean;
}

const Menu: FC<MenuPropsType> = ({navigationItems, handleMouseEnter, handleMouseLeave, isHover}) => {
  return (
    <nav className={classes.navigation}>
      {navigationItems.map((item, index) => (
        <div key={index} className={classes.navigation__item}>{item}</div>
      ))}
      <div className={classes.navigation__item}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        {isHover ? <HoverShop/> : <Shop/>}
      </div>
    </nav>
  );
};

export default Menu;