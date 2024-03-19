import { useEffect, useState } from "react";
import breakfastBackground from '../../assets/bg-breakfast.jpg';
import PageTitle from '../../components/PageTitle';
import ProductItem from '../../components/ProductItem';
import TextWithLine from '../../components/TextWithLine';
import { PRODUCT_ITEM_TYPE } from '../../utils/constants';
import { getProductByCategory } from "../../api";

const BreakfastProduct = () => {
    const [productList, setProductList] = useState([[], []]);
    
    const fetchProductList = async () => {
        try {
            const res = await getProductByCategory(2);
            if (res.error) throw res.error;
            const firstRowProduct = res.data.slice(0, 3);
            const secondRowProduct = res.data.slice(3);
            setProductList([firstRowProduct, secondRowProduct]);
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
        <div className="flex flex-col md:flex-row pb-96" style={{ background: 'white', backgroundImage: `url(${breakfastBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
            <div className="w-full md:w-1/2 p-12 flex flex-col gap-8 bg-white">
                <div className="flex flex-col items-start">
                    <PageTitle label="European" customStyle="" />
                    <TextWithLine label="Breakfast" lineWidth="16" customStyle="mt-1" />
                </div>
                <div className="flex flex-col gap-8 pb-8">
                    {productList[0].map(item => (
                        <ProductItem
                            key={item.id_product}
                            type={PRODUCT_ITEM_TYPE.SIMPLE}
                            {...item}
                            mustTryStyle="text-[#EA9B58]"
                            priceStyle="text-[#EA9B58]"
                        />
                    ))}
                </div>
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col gap-8 bg-white">
                <div className="flex flex-col gap-8">
                    {productList[1].map(item => (
                        <ProductItem
                            key={item.id}
                            type={PRODUCT_ITEM_TYPE.SIMPLE}
                            {...item}
                            mustTryStyle="text-[#EA9B58]"
                            priceStyle="text-[#EA9B58]"
                        />
                    ))}
                </div>
                <div className="w-4/5 border-t-[1px] border-black border-solid"></div>
            </div>
        </div>
    );
};


export default BreakfastProduct;
