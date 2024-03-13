// import React, { useState } from 'react';
import breakfastBackground from '../../assets/bg-breakfast.jpg';
import PageTitle from '../../components/PageTitle';
import ProductItem from '../../components/ProductItem';
import TextWithLine from '../../components/TextWithLine';
import { PRODUCT_ITEM_TYPE } from '../../utils/constants';

const BreakfastProduct = () => {
    const menuItems = [
        { id: 1, name: "English Breakfast", description: "Hearty meal with eggs, bacon, sausage, beans, tomato, mushrooms, and toast.", price: Math.floor(Math.random() * 10) + 10, mustTry: true },
        { id: 2, name: "French Croissant", description: "Buttery and flaky pastry, often enjoyed with jam or filled with ham and cheese.", price: Math.floor(Math.random() * 5) + 5, mustTry: false },
        { id: 3, name: "German Brötchen", description: "Soft and crusty rolls served with cold cuts, cheese, butter, and jam.", price: Math.floor(Math.random() * 5) + 7, mustTry: true },
    ];

    const menuItemsFeatured = [
        { id: 5, name: "Spanish Tortilla Española", description: "Thick omelette with eggs, potatoes, onions, and sometimes chorizo.", price: Math.floor(Math.random() * 5) + 8, mustTry: true },
        { id: 6, name: "Greek Yogurt with Honey and Nuts", description: "Creamy yogurt served with honey, nuts, fresh fruit, and bread.", price: Math.floor(Math.random() * 5) + 7, mustTry: false },
        { id: 7, name: "Swedish Pancakes", description: "Thin pancakes served with lingonberry jam, whipped cream, and bacon.", price: Math.floor(Math.random() * 5) + 9, mustTry: true }
    ];

    return (
        <div className="flex pb-96" style={{ background: 'white', backgroundImage: `url(${breakfastBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
            <div className="w-1/2 p-12 flex flex-col gap-8 bg-white">
                <div className="flex flex-col items-start">
                    <PageTitle label="European" customStyle="" />
                    <TextWithLine label="Breakfast" lineWidth="16" customStyle="mt-1" />
                </div>
                <div className="flex flex-col gap-8 pb-8">
                    {menuItems.map(item => (
                        <ProductItem
                            key={item.id}
                            type={PRODUCT_ITEM_TYPE.SIMPLE}
                            {...item}
                            mustTryStyle="text-[#EA9B58]"
                            priceStyle="text-[#EA9B58]"
                        />
                    ))}
                </div>
            </div>
            <div className="w-1/2 p-12 flex flex-col gap-8 bg-white">
                <div className="flex flex-col gap-8">
                    {menuItemsFeatured.map(item => (
                        <ProductItem
                            key={item.id}
                            type={PRODUCT_ITEM_TYPE.SIMPLE}
                            {...item}
                            mustTryStyle="text-[#EA9B58]"
                            priceStyle="text-[#EA9B58]"
                        />
                    ))}
                </div>
                <div className="w-4/5 border-t-[1px] border-black border-solid"></div>
            </div>
        </div>
    );
};


export default BreakfastProduct;
