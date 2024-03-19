import pageBackground from '../../assets/bg-coffee.jpg';
import PageSubtitle from '../../components/PageSubtitle';
import ProductItem from '../../components/ProductItem';
import { PRODUCT_ITEM_TYPE } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { getProductByCategory } from '../../api';

const CoffeeAndTea = () => {
    const [coffeeList, setCoffeeList] = useState([]);
    const [teaList, setTeaList] = useState([]);
    
    const fetchProductList = async (type = 8) => {
        try {
            const res = await getProductByCategory(type);
            if (res.error) throw res.error;
            if (type === 8) setCoffeeList(res.data);
            if (type === 9) setTeaList(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            // hideProgress();
        }
    };

    useEffect(() => {
        fetchProductList(8);
        fetchProductList(9);
    }, []);

    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-3/5 p-12 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <PageSubtitle label="Coffee" customStyle="" />
                    <div className="w-16 border-t-[1px] border-black border-solid -mt-2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {coffeeList.map(item => (
                            <ProductItem
                                type={PRODUCT_ITEM_TYPE.SIMPLE}
                                key={item.id_product}
                                {...item}
                                mustTryStyle="text-[#EA9B58]"
                                priceStyle="text-[#EA9B58]"
                                withDescription={false}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <PageSubtitle label="Tea" customStyle="" />
                    <div className="w-16 border-t-[1px] border-black border-solid -mt-2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {teaList.map(item => (
                            <ProductItem
                                type={PRODUCT_ITEM_TYPE.SIMPLE}
                                key={item.id_product}
                                {...item}
                                mustTryStyle="text-[#EA9B58]"
                                priceStyle="text-[#EA9B58]"
                                withDescription={false}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <div className="w-2/4 border-t-[1px] border-black border-solid mt-10"></div>
                </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col p-12" style={{ background: 'white', backgroundImage: `url(${pageBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }}>
                <div className="flex items-center gap-2">
                    <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight text-[#EA9B58]">Coffee</h1>
                    <div className="w-16 border-t-[1px] border-[#EA9B58] border-solid"></div>
                </div>
                <h1 className="dancing-script text-5xl ml-6 -mt-6 font-bold text-white">&</h1>
                <h1 className="cormorant-garamond-bold -mt-6 text-5xl font-bold leading-tight text-[#EA9B58]">Tea Based</h1>
            </div>
        </div>
    );
};


export default CoffeeAndTea;
