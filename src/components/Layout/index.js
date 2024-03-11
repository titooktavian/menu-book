// import React, { useState } from 'react';
import BreakfastProduct from '../BreakfastProduct';
import CoffeeAndTea from '../CoffeeAndTea';
import DrinkProduct from '../DrinkProduct';
import FeaturedProduct from '../FeaturedProduct';
import HandmadeProduct from '../HandmadeProduct';
import Header from '../Header';
import SaladProduct from '../SaladProduct';

const Layout = () => {
  return (
    <div>
        <Header />
        <FeaturedProduct />
        <BreakfastProduct />
        <HandmadeProduct />
        <SaladProduct />
        <DrinkProduct />
        <CoffeeAndTea />
    </div>
  );
};


export default Layout;
