import pageBackground from '../../assets/bg-coffee.jpg';
import { VscCoffee } from "react-icons/vsc";

const CoffeeAndTea = () => {
    const menuItems = [
        { id: 2, name: "Cappuccino", price: Math.floor(Math.random() * 5) + 4 },
        { id: 3, name: "Latte", price: Math.floor(Math.random() * 5) + 4 },
        { id: 4, name: "Americano", price: Math.floor(Math.random() * 5) + 3 },
        { id: 5, name: "Mocha", price: Math.floor(Math.random() * 5) + 5 },
        { id: 6, name: "Macchiato", price: Math.floor(Math.random() * 5) + 3 },
        { id: 7, name: "Flat White", price: Math.floor(Math.random() * 5) + 4 },
        { id: 8, name: "Affogato", price: Math.floor(Math.random() * 5) + 6 },
        { id: 9, name: "Turkish Coffee", price: Math.floor(Math.random() * 5) + 4 },
        { id: 10, name: "Iced Coffee", price: Math.floor(Math.random() * 5) + 4 }
    ];

    const teaMenu = [
        { id: 1, name: "Earl Grey", price: Math.floor(Math.random() * 5) + 3 },
        { id: 2, name: "English Breakfast", price: Math.floor(Math.random() * 5) + 3 },
        { id: 3, name: "Green Tea", price: Math.floor(Math.random() * 5) + 3 },
        { id: 4, name: "Chamomile", price: Math.floor(Math.random() * 5) + 3 },
        { id: 5, name: "Peppermint", price: Math.floor(Math.random() * 5) + 3 },
        { id: 6, name: "Jasmine Tea", price: Math.floor(Math.random() * 5) + 3 },
    ];
    return (
        <div className="flex">
            <div className="w-3/5 p-12 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="cormorant-garamond-semibold text-3xl">
                        Coffee
                    </div>
                    <div className="w-16 border-t-[1px] border-black border-solid -mt-2"></div>
                    <div className="grid grid-cols-2 gap-4">
                        {menuItems.map(item => (
                            <div key={item.id} className="flex flex-col">
                                <div className="flex w-4/5 items-end gap-12">
                                    <div className="cormorant-garamond-semibold grow text-2xl">
                                        {item.name}
                                        {/* <span className="cormorant-garamond-bold-italic grow text-xl text-[#EA9B58] pl-3">-Must Try</span> */}
                                    </div>
                                    <div className="cormorant-garamond-bold text-2xl grow text-right text-[#EA9B58]">{item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="cormorant-garamond-semibold text-3xl">
                        Tea
                    </div>
                    <div className="w-16 border-t-[1px] border-black border-solid -mt-2"></div>
                    <div className="grid grid-cols-2 gap-4">
                        {teaMenu.map(item => (
                            <div key={item.id} className="flex flex-col">
                                <div className="flex w-4/5 items-end gap-12">
                                    <div className="cormorant-garamond-semibold grow text-2xl">
                                        {item.name}
                                        {/* <span className="cormorant-garamond-bold-italic grow text-xl text-[#EA9B58] pl-3">-Must Try</span> */}
                                    </div>
                                    <div className="cormorant-garamond-bold text-2xl grow text-right text-[#EA9B58]">{item.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <div className="w-2/4 border-t-[1px] border-black border-solid mt-10"></div>
                </div>
            </div>
            <div className="w-2/5 flex flex-col pl-16" style={{ background: 'white', backgroundImage: `url(${pageBackground})`, backgroundSize: 'auto 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                <div className="flex items-center gap-2">
                    <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight text-[#EA9B58]">Coffee</h1>
                    <div className="w-16 border-t-[1px] border-[#EA9B58] border-solid"></div>
                </div>
                <h1 className="dancing-script text-5xl ml-6 -mt-6 font-bold">&</h1>
                <h1 className="cormorant-garamond-bold -mt-6 text-5xl font-bold leading-tight text-[#EA9B58]">Tea Based</h1>
                <div className="text-4xl pl-6 flex grow items-center">
                    <VscCoffee />
                </div>
            </div>
        </div>
    );
};


export default CoffeeAndTea;
