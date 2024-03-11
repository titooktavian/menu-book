// import React, { useState } from 'react';
import featuredBackground from '../../assets/bg-featured.jpg';

const FeaturedProduct = () => {
    const menuItems = [
        { id: 1, name: "Croissant", description: "Flaky French pastry with butter layers.", price: Math.floor(Math.random() * 10) + 5 },
        { id: 2, name: "Fish and Chips", description: "Crispy battered fish with golden fries.", price: Math.floor(Math.random() * 10) + 10 },
        { id: 3, name: "Bruschetta", description: "Toasted bread topped with fresh tomato.", price: Math.floor(Math.random() * 10) + 8 },
        { id: 4, name: "Sangria", description: "Refreshing Spanish wine punch with fruit.", price: Math.floor(Math.random() * 10) + 15 },
        { id: 5, name: "Sauerbraten", description: "Tangy German pot roast with spices.", price: Math.floor(Math.random() * 10) + 20 },
        { id: 6, name: "Lemonade", description: "Zesty, thirst-quenching citrus drink.", price: Math.floor(Math.random() * 5) + 3 }
    ];
    return (
        <div className="flex h-screen">
            <div className="w-1/2 rounded-tl-[180px] rounded-br-[180px]" style={{ background: 'white', backgroundImage: `url(${featuredBackground})`, backgroundSize: 'cover' }} />
            <div className="w-1/2 p-12 flex flex-col gap-8">
                <div className="flex flex-col items-start">
                    <h1 className="cormorant-garamond-bold text-5xl font-bold leading-tight">Our Selected</h1>
                    <div className="flex items-center gap-2">
                        <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight">Products</h1>
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
                <div className="w-4/5 border-t-[1px] border-black border-solid mt-10"></div>
            </div>
        </div>
    );
};


export default FeaturedProduct;
