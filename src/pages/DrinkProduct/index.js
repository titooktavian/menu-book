import PageSubtitle from "../../components/PageSubtitle";
import PageTitle from "../../components/PageTitle";
import ProductItem from "../../components/ProductItem";
import { PRODUCT_ITEM_TYPE } from "../../utils/constants";

const DrinkProduct = () => {
    const smoothieMenu = [
        { id: 1, name: "Berry Blast Smoothie", description: "Mixed berries, yogurt, and honey for a refreshing treat.", price: Math.floor(Math.random() * 5) + 6, mustTry: false },
        { id: 2, name: "Tropical Paradise Smoothie", description: "Pineapple, mango, banana, and coconut milk, a taste of the tropics.", price: Math.floor(Math.random() * 5) + 7, mustTry: true },
        { id: 3, name: "Green Goddess Smoothie", description: "Spinach, banana, pineapple, and coconut water for a nutritious boost.", price: Math.floor(Math.random() * 5) + 8, mustTry: true },
        { id: 4, name: "Peachy Keen Smoothie", description: "Ripe peaches, Greek yogurt, and a hint of vanilla, delightfully sweet.", price: Math.floor(Math.random() * 5) + 7, mustTry: false },
    ];

    const juiceMenu = [
        { id: 1, name: "Tropical Twist", description: "Pineapple, mango, and coconut water blend.", price: Math.floor(Math.random() * 5) + 6, mustTry: true },
        { id: 2, name: "Berry Blast", description: "Strawberry, blueberry, and apple juice mix.", price: Math.floor(Math.random() * 5) + 6, mustTry: false },
        { id: 3, name: "Citrus Zing", description: "Orange, lemon, and lime juice fusion.", price: Math.floor(Math.random() * 5) + 6, mustTry: true },
        { id: 4, name: "Green Goddess", description: "Spinach, kale, apple, and lemon juice concoction.", price: Math.floor(Math.random() * 5) + 6, mustTry: false },
        { id: 5, name: "Sunrise Splash", description: "Carrot, orange, and ginger juice infusion.", price: Math.floor(Math.random() * 5) + 6, mustTry: true }
    ];

    const mojitoMenu = [
        { id: 1, name: "Classic Mojito", description: "Rum, mint, lime, sugar, soda.", price: Math.floor(Math.random() * 5) + 8, mustTry: false },
        { id: 2, name: "Strawberry Mojito", description: "Rum, mint, lime, strawberry, soda.", price: Math.floor(Math.random() * 5) + 9, mustTry: true },
        { id: 3, name: "Blueberry Mojito", description: "Rum, mint, lime, blueberry, soda.", price: Math.floor(Math.random() * 5) + 9, mustTry: true },
        { id: 4, name: "Pineapple Mojito", description: "Rum, mint, lime, pineapple, soda.", price: Math.floor(Math.random() * 5) + 9, mustTry: false },
        { id: 5, name: "Mango Mojito", description: "Rum, mint, lime, mango, soda.", price: Math.floor(Math.random() * 5) + 9, mustTry: false },
        { id: 6, name: "Coconut Mojito", description: "Rum, mint, lime, coconut, soda.", price: Math.floor(Math.random() * 5) + 9, mustTry: true }
    ];

    return (
        <div className="flex">
            <div className="w-full px-12 py-16 flex flex-col gap-16">
                <div className="flex flex-col">
                    <PageTitle label="Taste Our Beverages!" customStyle="dancing-script text-6xl font-bold text-[#EA9B58]" />
                </div>
                <div className="flex gap-8">
                    <div className="w-1/3 flex flex-col gap-8">
                        <PageSubtitle label="Smoothies" customStyle="" />
                        <div className="w-1/4 border-t-[1px] border-black border-solid -mt-5"></div>
                        <div className="flex flex-col gap-8">
                            {smoothieMenu.map(item => (
                                <ProductItem
                                    type={PRODUCT_ITEM_TYPE.SIMPLE}
                                    key={item.id}
                                    {...item}
                                    mustTryStyle="text-[#EA9B58]"
                                    priceStyle="text-[#EA9B58]"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-8">
                        <PageSubtitle label="Juices" customStyle="" />
                        <div className="w-1/4 border-t-[1px] border-black border-solid -mt-5"></div>
                        <div className="flex flex-col gap-8">
                            {juiceMenu.map(item => (
                                <ProductItem
                                    type={PRODUCT_ITEM_TYPE.SIMPLE}
                                    key={item.id}
                                    {...item}
                                    mustTryStyle="text-[#EA9B58]"
                                    priceStyle="text-[#EA9B58]"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-8">
                        <PageSubtitle label="Mojitos" customStyle="" />
                        <div className="w-1/4 border-t-[1px] border-black border-solid -mt-5"></div>
                        <div className="flex flex-col gap-8">
                            {mojitoMenu.map(item => (
                                <ProductItem
                                    type={PRODUCT_ITEM_TYPE.SIMPLE}
                                    key={item.id}
                                    {...item}
                                    mustTryStyle="text-[#EA9B58]"
                                    priceStyle="text-[#EA9B58]"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <div className="w-1/3 border-t-[1px] border-black border-solid mt-10 mb-10"></div>
                </div>
            </div>
        </div>
    );
};


export default DrinkProduct;
