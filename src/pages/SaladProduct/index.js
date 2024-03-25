import { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import ProductItem from "../../components/ProductItem";
import TextWithLine from "../../components/TextWithLine";
import { LOADING_TYPE, PRODUCT_ITEM_TYPE } from "../../utils/constants";
import { getProductByCategory } from "../../api";
import { MenuBookContext } from "../../contexts/MenuBookContext";

const SaladProduct = () => {
    const { setShowLoading, showLoading } = useContext(MenuBookContext);
    const [saladList, setSaladList] = useState([]);
    const [oatList, setOatList] = useState([]);
    
    const fetchProductList = async (type = 3) => {
        setShowLoading(LOADING_TYPE.SALAD);
        try {
            const res = await getProductByCategory(type);
            if (res.error) throw res.error;
            if (type === 3) setSaladList(res.data);
            if (type === 4) setOatList(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            setShowLoading(LOADING_TYPE.BEVERAGE);
        }
    };

    useEffect(() => {
        if (showLoading === LOADING_TYPE.SALAD) {
            fetchProductList(3);
            fetchProductList(4);
        }
    }, [showLoading]);

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
                        {saladList.map(item => (
                            <ProductItem
                                key={item.id_product}
                                type={PRODUCT_ITEM_TYPE.SIMPLE}
                                {...item}
                                mustTryStyle="text-white"
                                priceStyle="text-white"
                            />
                        ))}
                    </div>
                    <div className="w-1/4 border-t-[1px] border-black border-solid"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {oatList.map(item => (
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
