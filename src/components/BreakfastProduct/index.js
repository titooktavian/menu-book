// import React, { useState } from 'react';
import breakfastBackground from '../../assets/bg-breakfast.jpg';

const BreakfastProduct = () => {
    const menuItems = [
        { id: 1, name: "English Breakfast", description: "Hearty meal with eggs, bacon, sausage, beans, tomato, mushrooms, and toast.", price: Math.floor(Math.random() * 10) + 10 },
        { id: 2, name: "French Croissant", description: "Buttery and flaky pastry, often enjoyed with jam or filled with ham and cheese.", price: Math.floor(Math.random() * 5) + 5 },
        { id: 3, name: "German Brötchen", description: "Soft and crusty rolls served with cold cuts, cheese, butter, and jam.", price: Math.floor(Math.random() * 5) + 7 },
    ];

    const menuItemsFeatured = [
        { id: 5, name: "Spanish Tortilla Española", description: "Thick omelette with eggs, potatoes, onions, and sometimes chorizo.", price: Math.floor(Math.random() * 5) + 8 },
        { id: 6, name: "Greek Yogurt with Honey and Nuts", description: "Creamy yogurt served with honey, nuts, fresh fruit, and bread.", price: Math.floor(Math.random() * 5) + 7 },
        { id: 7, name: "Swedish Pancakes", description: "Thin pancakes served with lingonberry jam, whipped cream, and bacon.", price: Math.floor(Math.random() * 5) + 9 }
    ];

    return (
        <div className="flex pb-60 pb-80" style={{ background: 'white', backgroundImage: `url(${breakfastBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
            <div className="w-1/2 p-12 flex flex-col gap-8 bg-white">
                <div className="flex flex-col items-start">
                    <h1 className="cormorant-garamond-bold text-5xl font-bold leading-tight">European</h1>
                    <div className="flex items-center gap-2">
                        <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight">Breakfast</h1>
                        <div className="w-16 border-t-[1px] border-black border-solid"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {menuItems.map(item => (
                        <div key={item.id} className="flex flex-col">
                            <div className="flex w-4/5 items-end gap-12">
                                <div className="cormorant-garamond-semibold grow text-2xl">
                                    {item.name}
                                    <span className="cormorant-garamond-bold-italic grow text-xl text-[#EA9B58] pl-3">-Must Try</span>
                                </div>
                                <div className="cormorant-garamond-bold text-2xl grow text-right text-[#EA9B58]">{item.price}</div>
                            </div>
                            <div className="cormorant-garamond-semibold-italic grow text-xl">{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-1/2 p-12 flex flex-col gap-8 bg-white">
                <div className="flex flex-col gap-8">
                    {menuItemsFeatured.map(item => (
                        <div key={item.id} className="flex flex-col">
                            <div className="flex w-4/5 items-end gap-12">
                                <div className="cormorant-garamond-semibold grow text-2xl">
                                    {item.name}
                                    <span className="cormorant-garamond-bold-italic grow text-xl text-[#EA9B58] pl-3">-Must Try</span>
                                </div>
                                <div className="cormorant-garamond-bold text-2xl grow text-right text-[#EA9B58]">{item.price}</div>
                            </div>
                            <div className="cormorant-garamond-semibold-italic grow text-xl">{item.description}</div>
                        </div>
                    ))}
                </div>
                <div className="w-4/5 border-t-[1px] border-black border-solid"></div>
            </div>
        </div>
    );
};


export default BreakfastProduct;
