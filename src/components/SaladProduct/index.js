const SaladProduct = () => {
    const menuItems = [
        { id: 1, name: "Caesar Salad", description: "Crisp romaine, croutons, Parmesan, and creamy Caesar dressing.", price: Math.floor(Math.random() * 5) + 8 },
        { id: 2, name: "Greek Salad", description: "Cucumbers, tomatoes, olives, red onions, feta cheese, and Greek dressing.", price: Math.floor(Math.random() * 5) + 9 },
        { id: 3, name: "Caprese Salad", description: "Tomatoes, mozzarella, basil, olive oil, and balsamic glaze.", price: Math.floor(Math.random() * 5) + 10 },
        { id: 4, name: "Cobb Salad", description: "Mixed greens, chicken, bacon, eggs, avocado, and blue cheese dressing.", price: Math.floor(Math.random() * 5) + 12 },
        { id: 5, name: "Nicoise Salad", description: "Tuna, eggs, green beans, potatoes, olives, tomatoes, and Dijon vinaigrette.", price: Math.floor(Math.random() * 5) + 11 },
    ];

    const oatMenu = [
        { id: 1, name: "Oatmeal with Berries and Almonds", description: "Creamy oats topped with fresh berries and crunchy almonds.", price: Math.floor(Math.random() * 5) + 8 },
        { id: 2, name: "Oat Pancakes with Maple Syrup", description: "Fluffy oat pancakes served with golden maple syrup.", price: Math.floor(Math.random() * 5) + 9 },
        { id: 3, name: "Oatmeal Raisin Cookies", description: "Soft cookies made with oats, raisins, and warm spices.", price: Math.floor(Math.random() * 5) + 7 },
        { id: 4, name: "Oat and Banana Smoothie", description: "Creamy smoothie blended with oats, bananas, and honey.", price: Math.floor(Math.random() * 5) + 6 }
    ];
    return (
        <div className="flex bg-[#F6A96C]">
            <div className="w-full px-12 py-16 flex flex-col gap-16">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight">Salad</h1>
                        <div className="w-16 border-t-[1px] border-black border-solid"></div>
                    </div>
                    <h1 className="dancing-script text-5xl ml-20 -mt-8 font-bold text-white">&</h1>
                    <h1 className="cormorant-garamond-bold -mt-8 text-5xl font-bold leading-tight">Overnight Oat</h1>
                </div>
                <div className="flex flex-col w-full gap-8">
                    <div className="grid grid-cols-3 gap-8 w-full">
                        {menuItems.map(item => (
                            <div key={item.id} className="flex flex-col">
                                <div className="flex w-full items-end gap-12">
                                    <div className="cormorant-garamond-semibold grow text-2xl">
                                        {item.name}
                                        <span className="cormorant-garamond-bold-italic grow text-xl text-white pl-3">-Must Try</span>
                                    </div>
                                    <div className="cormorant-garamond-bold text-2xl grow text-right text-white">{item.price}</div>
                                </div>
                                <div className="w-full cormorant-garamond-semibold-italic grow text-xl">{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/3 border-t-[1px] border-black border-solid"></div>
                    <div className="grid grid-cols-3 gap-8 w-full">
                        {oatMenu.map(item => (
                            <div key={item.id} className="flex flex-col">
                                <div className="flex w-full items-end gap-12">
                                    <div className="cormorant-garamond-semibold grow text-2xl">
                                        {item.name}
                                        <span className="cormorant-garamond-bold-italic grow text-xl text-white pl-3">-Must Try</span>
                                    </div>
                                    <div className="cormorant-garamond-bold text-2xl grow text-right text-white">{item.price}</div>
                                </div>
                                <div className="w-full cormorant-garamond-semibold-italic grow text-xl">{item.description}</div>
                            </div>
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
