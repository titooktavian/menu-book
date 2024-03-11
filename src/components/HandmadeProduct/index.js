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

const HandmadeProduct = () => {
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
    return (
        <div className="flex h-fit">
            <div className="w-full px-12 py-16 flex flex-col gap-16">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight">Handmade</h1>
                        <div className="w-12 border-t-[1px] border-black border-solid"></div>
                    </div>
                    <h1 className="dancing-script text-8xl -mt-9 font-bold text-[#EA9B58]">Happiness</h1>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {menuItems.map(item => (
                        <div key={item.id} className="flex gap-2">
                            <img src={item.image_name} className="w-24 h-24 rounded-lg" />
                            <div className="flex flex-col">
                                <div className="cormorant-garamond-semibold text-2xl">{item.name}</div>
                                <div className="cormorant-garamond-semibold-italic text-xl mt-0">{item.description}</div>
                                <div className="cormorant-garamond-bold text-2xl text-[#EA9B58] mt-0">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-1/3 border-t-[1px] border-black border-solid mt-3"></div>
                </div>
            </div>
        </div>
    );
};


export default HandmadeProduct;
