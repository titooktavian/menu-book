// import React, { useState } from 'react';
import featuredBackground from '../../assets/bg-featured.jpg';
import PageTitle from '../../components/PageTitle';
import ProductItem from '../../components/ProductItem';
import TextWithLine from '../../components/TextWithLine';
import { PRODUCT_ITEM_TYPE } from '../../utils/constants';

const FeaturedProduct = () => {
    const menuItems = [
        { id: 1, name: "Croissant", description: "Flaky French pastry with butter layers.", price: Math.floor(Math.random() * 10) + 5, mustTry: true },
        { id: 2, name: "Fish and Chips", description: "Crispy battered fish with golden fries.", price: Math.floor(Math.random() * 10) + 10, mustTry: false },
        { id: 3, name: "Bruschetta", description: "Toasted bread topped with fresh tomato.", price: Math.floor(Math.random() * 10) + 8, mustTry: false },
        { id: 4, name: "Sangria", description: "Refreshing Spanish wine punch with fruit.", price: Math.floor(Math.random() * 10) + 15, mustTry: true },
        { id: 5, name: "Sauerbraten", description: "Tangy German pot roast with spices.", price: Math.floor(Math.random() * 10) + 20, mustTry: false },
        { id: 6, name: "Lemonade", description: "Zesty, thirst-quenching citrus drink.", price: Math.floor(Math.random() * 5) + 3, mustTry: false }
    ];
    return (
        <div className="flex h-screen">
            <div className="w-1/2 rounded-tl-[180px] rounded-br-[180px]" style={{ background: 'white', backgroundImage: `url(${featuredBackground})`, backgroundSize: 'cover' }} />
            <div className="w-1/2 p-12 flex flex-col gap-8">
                <div className="flex flex-col items-start">
                    <PageTitle label="Our Selected" customStyle="" />
                    <TextWithLine label="Products" lineWidth="16" customStyle="mt-1" />
                </div>
                <div className="flex flex-col gap-8">
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
                <div className="w-4/5 border-t-[1px] border-black border-solid mt-10"></div>
            </div>
        </div>
    );
};


export default FeaturedProduct;
