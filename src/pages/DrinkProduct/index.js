import { useEffect, useState } from "react";
import PageSubtitle from "../../components/PageSubtitle";
import PageTitle from "../../components/PageTitle";
import ProductItem from "../../components/ProductItem";
import { PRODUCT_ITEM_TYPE } from "../../utils/constants";
import { getProductByCategory } from "../../api";

const DrinkProduct = () => {
    const [smoothieList, setSmoothieList] = useState([]);
    const [juiceList, setJuiceList] = useState([]);
    const [mojitoList, setMojitoList] = useState([]);
    
    const fetchProductList = async (type = 5) => {
        try {
            const res = await getProductByCategory(type);
            if (res.error) throw res.error;
            if (type === 5) setSmoothieList(res.data);
            if (type === 6) setJuiceList(res.data);
            if (type === 7) setMojitoList(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            // hideProgress();
        }
    };

    useEffect(() => {
        fetchProductList(5);
        fetchProductList(6);
        fetchProductList(7);
    }, []);

    return (
        <div className="flex">
            <div className="w-full px-12 py-16 flex flex-col gap-16">
                <div className="flex flex-col">
                    <PageTitle label="Taste Our Beverages!" customStyle="dancing-script text-6xl font-bold text-[#EA9B58]" />
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 flex flex-col gap-8">
                        <PageSubtitle label="Smoothies" customStyle="" />
                        <div className="w-1/4 border-t-[1px] border-black border-solid -mt-5"></div>
                        <div className="flex flex-col gap-8">
                            {smoothieList.map(item => (
                                <ProductItem
                                    type={PRODUCT_ITEM_TYPE.SIMPLE}
                                    key={item.id_product}
                                    {...item}
                                    mustTryStyle="text-[#EA9B58]"
                                    priceStyle="text-[#EA9B58]"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col gap-8">
                        <PageSubtitle label="Juices" customStyle="" />
                        <div className="w-1/4 border-t-[1px] border-black border-solid -mt-5"></div>
                        <div className="flex flex-col gap-8">
                            {juiceList.map(item => (
                                <ProductItem
                                    type={PRODUCT_ITEM_TYPE.SIMPLE}
                                    key={item.id_product}
                                    {...item}
                                    mustTryStyle="text-[#EA9B58]"
                                    priceStyle="text-[#EA9B58]"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 flex flex-col gap-8">
                        <PageSubtitle label="Mojitos" customStyle="" />
                        <div className="w-1/4 border-t-[1px] border-black border-solid -mt-5"></div>
                        <div className="flex flex-col gap-8">
                            {mojitoList.map(item => (
                                <ProductItem
                                    type={PRODUCT_ITEM_TYPE.SIMPLE}
                                    key={item.id_product}
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
