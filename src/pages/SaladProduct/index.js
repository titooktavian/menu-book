import PageTitle from "../../components/PageTitle";
import ProductItem from "../../components/ProductItem";
import TextWithLine from "../../components/TextWithLine";
import { PRODUCT_ITEM_TYPE } from "../../utils/constants";

const SaladProduct = () => {
    const menuItems = [
        { id: 1, name: "Caesar Salad", description: "Crisp romaine, croutons, Parmesan, and creamy Caesar dressing.", price: Math.floor(Math.random() * 5) + 8, mustTry: false },
        { id: 2, name: "Greek Salad", description: "Cucumbers, tomatoes, olives, red onions, feta cheese, and Greek dressing.", price: Math.floor(Math.random() * 5) + 9, mustTry: false },
        { id: 3, name: "Caprese Salad", description: "Tomatoes, mozzarella, basil, olive oil, and balsamic glaze.", price: Math.floor(Math.random() * 5) + 10, mustTry: true },
        { id: 4, name: "Cobb Salad", description: "Mixed greens, chicken, bacon, eggs, avocado, and blue cheese dressing.", price: Math.floor(Math.random() * 5) + 12, mustTry: false },
        { id: 5, name: "Nicoise Salad", description: "Tuna, eggs, green beans, potatoes, olives, tomatoes, and Dijon vinaigrette.", price: Math.floor(Math.random() * 5) + 11, mustTry: true },
    ];

    const oatMenu = [
        { id: 1, name: "Oatmeal with Berries and Almonds", description: "Creamy oats topped with fresh berries and crunchy almonds.", price: Math.floor(Math.random() * 5) + 8, mustTry: false },
        { id: 2, name: "Oat Pancakes with Maple Syrup", description: "Fluffy oat pancakes served with golden maple syrup.", price: Math.floor(Math.random() * 5) + 9, mustTry: true },
        { id: 3, name: "Oatmeal Raisin Cookies", description: "Soft cookies made with oats, raisins, and warm spices.", price: Math.floor(Math.random() * 5) + 7, mustTry: true },
        { id: 4, name: "Oat and Banana Smoothie", description: "Creamy smoothie blended with oats, bananas, and honey.", price: Math.floor(Math.random() * 5) + 6, mustTry: false }
    ];
    return (
        <div className="flex bg-[#F6A96C]">
            <div className="w-full px-12 py-16 flex flex-col gap-16">
                <div className="flex flex-col">
                    <TextWithLine label="Salad" lineWidth="16" customStyle="mt-1" />
                    <h1 className="dancing-script text-5xl ml-20 -mt-8 font-bold text-white">&</h1>
                    <PageTitle label="Overnight Oat" customStyle="-mt-8" />
                </div>
                <div className="flex flex-col w-full gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {menuItems.map(item => (
                            <ProductItem
                                key={item.id}
                                type={PRODUCT_ITEM_TYPE.SIMPLE}
                                {...item}
                                mustTryStyle="text-white"
                                priceStyle="text-white"
                            />
                        ))}
                    </div>
                    <div className="w-1/4 border-t-[1px] border-black border-solid"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {oatMenu.map(item => (
                            <ProductItem
                                key={item.id}
                                type={PRODUCT_ITEM_TYPE.SIMPLE}
                                {...item}
                                mustTryStyle="text-white"
                                priceStyle="text-white"
                            />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3 border-t-[1px] border-black border-solid mt-10"></div>
                </div>
            </div>
        </div>
    );
};


export default SaladProduct;
