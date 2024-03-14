// import React from "react";
import Slider from "react-slick";
// import PropTypes from 'prop-types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import croissant from '../../assets/products/croissant.png';
import eclair from '../../assets/products/eclair.png';
import baklava from '../../assets/products/baklava.png';
import scone from '../../assets/products/scone.png';
import danish from '../../assets/products/danish.png';
import palmier from '../../assets/products/palmier.png';
import macaron from '../../assets/products/macaron.png';
import cannoli from '../../assets/products/cannoli.png';
import strudel from '../../assets/products/strudel.png';
import brioche from '../../assets/products/brioche.png';
import turnover from '../../assets/products/turnover.png';
import painAu from '../../assets/products/pain-au.png';

const SliderGallery = () => {
    const menuItems = [
        { id: 1, name: "Croissant", description: "Buttery, flaky French delight.", price: Math.floor(Math.random() * 5) + 5, image_name: croissant },
        { id: 2, name: "Éclair", description: "Cream-filled choux pastry, chocolate-glazed.", price: Math.floor(Math.random() * 5) + 6, image_name: eclair },
        { id: 3, name: "Baklava", description: "Layers of phyllo, nuts, honey.", price: Math.floor(Math.random() * 5) + 7, image_name: baklava },
        { id: 4, name: "Scone", description: "Crumbly biscuit with fruit or nuts.", price: Math.floor(Math.random() * 5) + 4, image_name: scone },
        { id: 5, name: "Danish", description: "Flaky pastry filled with fruit or custard.", price: Math.floor(Math.random() * 5) + 5, image_name: danish },
        { id: 6, name: "Palmier", description: "Caramelized puff pastry delight.", price: Math.floor(Math.random() * 5) + 6, image_name: palmier },
        { id: 7, name: "Macaron", description: "Colorful meringue cookie sandwich.", price: Math.floor(Math.random() * 5) + 8, image_name: macaron },
        { id: 8, name: "Cannoli", description: "Ricotta-filled Italian pastry shell.", price: Math.floor(Math.random() * 5) + 7, image_name: cannoli },
        { id: 9, name: "Strudel", description: "Fruit or cheese-filled layered dough.", price: Math.floor(Math.random() * 5) + 6, image_name: strudel },
        { id: 10, name: "Brioche", description: "Rich, buttery bread pastry.", price: Math.floor(Math.random() * 5) + 5, image_name: brioche },
        { id: 11, name: "Puff Pastry Turnover", description: "Flaky filled pastry treat.", price: Math.floor(Math.random() * 5) + 4, image_name: turnover },
        { id: 12, name: "Pain au Chocolat", description: "Croissant with chocolate filling.", price: Math.floor(Math.random() * 5) + 6, image_name: painAu }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
    };
    
    return (
        <div className="slider-container w-full md:w-3/5">
            <Slider {...settings}>
                {menuItems.map(item => (
                    <div key={item.id} className="flex flex-col gap-2 items-center mb-10">
                        <img src={item.image_name} className="w-4/5 h-4/5 rounded-lg" />
                        
                        <div className="flex flex-col w-4/5">
                            <div className="flex">
                                <div className="cormorant-garamond-semibold text-2xl w-2/3">{item.name}</div>
                                <div className="cormorant-garamond-bold text-2xl text-[#FFFFFF] mt-0 text-right w-1/3">{item.price}</div>
                            </div>
                            <div className="cormorant-garamond-semibold-italic text-xl mt-0">{item.description}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// SliderGallery.propTypes = {
    // label: PropTypes.string.isRequired,
    // customStyle: PropTypes.string.isRequired,
// }
  
export default SliderGallery;
