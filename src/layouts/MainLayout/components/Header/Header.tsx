import React, {useState} from 'react';
import {Close, HoverShop, Logo, Menu as MenuIcon, Shop} from "../../../../assets/icons";
import classes from './Header.module.scss';
import useWindowWidth from "../../../../hooks/useWindowWidth";
import Menu from "./components/Menu/Menu";
import AdaptiveMenu from "./components/AdaptiveMenu/AdaptiveMenu";

const navigationItems = ['Home', 'Products'];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  }

  const handleMouseLeave = () => {
    setIsHover(false);
  }

  const windowWidth = useWindowWidth();
  const isTablet = windowWidth <= 768;

  return (
    <header className={classes.header}>
      <Logo/>
      {isTablet
        ? <nav>
          <div className={classes.header__icon} onClick={toggleMenu}>
            <MenuIcon/>
          </div>

          {isOpenMenu && (
            <AdaptiveMenu toggleMenu={toggleMenu} navigationItems={navigationItems} handleMouseEnter={handleMouseEnter}
                          handleMouseLeave={handleMouseLeave} isHover={isHover}/>
            // <div className={classes.menu}>
            //   <div onClick={toggleMenu} className={classes.menu__icon}>
            //     <Close/>
            //   </div>
            //   {navigationItems.map((item, index) => (
            //     <div key={index} className={classes.menu__item}>{item}</div>
            //   ))}
            //   <div className={classes.menu__item}
            //        onMouseEnter={handleMouseEnter}
            //        onMouseLeave={handleMouseLeave}>
            //     {isHover ? <HoverShop/> : <Shop/>}
            //   </div>
            // </div>
          )}

        </nav>
        :
        <Menu handleMouseLeave={handleMouseLeave}
              handleMouseEnter={handleMouseEnter}
              isHover={isHover}
              navigationItems={navigationItems}
        />
        // <nav className={classes.navigation}>
        //   {navigationItems.map((item, index) => (
        //     <div key={index} className={classes.navigation__item}>{item}</div>
        //   ))}
        //   <div className={classes.navigation__item}
        //        onMouseEnter={handleMouseEnter}
        //        onMouseLeave={handleMouseLeave}>
        //     {isHover ? <HoverShop/> : <Shop/>}
        //   </div>
        // </nav>}
      }
    </header>
  );
};

export default Header;