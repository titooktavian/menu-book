import pageBackground from '../../assets/bg-coffee.jpg';
import { VscCoffee } from "react-icons/vsc";
import PageSubtitle from '../../components/PageSubtitle';
import ProductItem from '../../components/ProductItem';
import { PRODUCT_ITEM_TYPE } from '../../utils/constants';

const CoffeeAndTea = () => {
    const menuItems = [
        { id: 2, name: "Cappuccino", price: Math.floor(Math.random() * 5) + 4, mustTry: true },
        { id: 3, name: "Latte", price: Math.floor(Math.random() * 5) + 4, mustTry: false },
        { id: 4, name: "Americano", price: Math.floor(Math.random() * 5) + 3, mustTry: false },
        { id: 5, name: "Mocha", price: Math.floor(Math.random() * 5) + 5, mustTry: false },
        { id: 6, name: "Macchiato", price: Math.floor(Math.random() * 5) + 3, mustTry: false },
        { id: 7, name: "Flat White", price: Math.floor(Math.random() * 5) + 4, mustTry: true },
        { id: 8, name: "Affogato", price: Math.floor(Math.random() * 5) + 6, mustTry: true },
        { id: 9, name: "Turkish Coffee", price: Math.floor(Math.random() * 5) + 4, mustTry: true },
        { id: 10, name: "Iced Coffee", price: Math.floor(Math.random() * 5) + 4, mustTry: false }
    ];

    const teaMenu = [
        { id: 1, name: "Earl Grey", price: Math.floor(Math.random() * 5) + 3, mustTry: false },
        { id: 3, name: "Green Tea", price: Math.floor(Math.random() * 5) + 3, mustTry: true },
        { id: 4, name: "Chamomile", price: Math.floor(Math.random() * 5) + 3, mustTry: true },
        { id: 5, name: "Peppermint", price: Math.floor(Math.random() * 5) + 3, mustTry: true },
        { id: 6, name: "Jasmine Tea", price: Math.floor(Math.random() * 5) + 3, mustTry: false },
    ];
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-3/5 p-12 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <PageSubtitle label="Coffee" customStyle="" />
                    <div className="w-16 border-t-[1px] border-black border-solid -mt-2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {menuItems.map(item => (
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

                <div className="flex flex-col gap-4">
                    <PageSubtitle label="Tea" customStyle="" />
                    <div className="w-16 border-t-[1px] border-black border-solid -mt-2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {teaMenu.map(item => (
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
                
                <div className="flex justify-center">
                    <div className="w-2/4 border-t-[1px] border-black border-solid mt-10"></div>
                </div>
            </div>
            <div className="w-full h-screen md:w-2/5 flex flex-col pl-16" style={{ background: 'white', backgroundImage: `url(${pageBackground})`, backgroundSize: 'auto 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                <div className="flex items-center gap-2 pt-12 md:pt-0">
                    <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight text-[#EA9B58]">Coffee</h1>
                    <div className="w-16 border-t-[1px] border-[#EA9B58] border-solid"></div>
                </div>
                <h1 className="dancing-script text-5xl ml-6 -mt-6 font-bold text-white md:text-black">&</h1>
                <h1 className="cormorant-garamond-bold -mt-6 text-5xl font-bold leading-tight text-[#EA9B58]">Tea Based</h1>
                <div className="text-4xl pl-6 hidden md:flex grow items-center">
                    <VscCoffee />
                </div>
            </div>
        </div>
    );
};


export default CoffeeAndTea;
