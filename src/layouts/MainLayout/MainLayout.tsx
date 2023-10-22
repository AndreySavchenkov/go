import React, {FC} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import classes from './MainLayout.module.scss';

type MainLayoutPropsType = {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutPropsType> = ({children}) => {
  return (
    <div className={classes.layout}>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;