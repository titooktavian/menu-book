// import React, { useState } from 'react';
import BreakfastProduct from '../../pages/BreakfastProduct';
import CoffeeAndTea from '../../pages/CoffeeAndTea';
import DrinkProduct from '../../pages/DrinkProduct';
import FeaturedProduct from '../../pages/FeaturedProduct';
import Gallery from '../../pages/Gallery';
import HandmadeProduct from '../../pages/HandmadeProduct';
import Header from '../../pages/Header';
import SaladProduct from '../../pages/SaladProduct';
import Footer from '../Footer';

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
            <Gallery />
            <Footer />
        </div>
    );
};


export default Layout;
