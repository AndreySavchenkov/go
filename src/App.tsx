import React from 'react';
import 'normalize.css';
import './styles/variables.scss';
import './styles/fonts.scss';
import MainLayout from "./layouts/MainLayout/MainLayout";
import Banner from "./components/Banner/Banner";
import Offers from "./components/Offers/Offers";
import Info from './components/Info/Info';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <MainLayout>
        <Banner/>
        <Offers />
        <Info />
      </MainLayout>
    </div>
  );
}

export default App;
