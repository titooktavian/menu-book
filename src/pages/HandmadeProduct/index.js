import { useEffect, useState } from "react";
import { getProductByCategory } from "../../api";

const HandmadeProduct = () => {
    const [productList, setProductList] = useState([]);
    
    const fetchProductList = async () => {
        try {
            const res = await getProductByCategory(1);
            if (res.error) throw res.error;
            setProductList(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            // hideProgress();
        }
    };

    useEffect(() => {
        fetchProductList();
    }, []);

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {productList.map(item => (
                        <div key={item.id_product} className="flex gap-2">
                            <img src={item.product_image} className="w-24 h-24 rounded-lg" />
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
