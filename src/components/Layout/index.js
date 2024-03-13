// import React, { useState } from 'react';
import BreakfastProduct from '../../pages/BreakfastProduct';
import CoffeeAndTea from '../../pages/CoffeeAndTea';
import DrinkProduct from '../../pages/DrinkProduct';
import FeaturedProduct from '../../pages/FeaturedProduct';
import HandmadeProduct from '../../pages/HandmadeProduct';
import Header from '../../pages/Header';
import SaladProduct from '../../pages/SaladProduct';

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
            <div>bundling</div>
            <div>promo</div>
        </div>
    );
};


export default Layout;
