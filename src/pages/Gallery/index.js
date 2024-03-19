import { useEffect, useState } from "react";
import SliderGallery from "../../components/SliderGallery";
import { getCategoryList, getProductByCategory } from "../../api";

const Gallery = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [productList, setProductList] = useState([]);

    const fetchCategoryList = async () => {
        try {
            const res = await getCategoryList();
            if (res.error) throw res.error;
            setActiveCategory(res.data[0].id_category);
            setCategoryList(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            // hideProgress();
        }
    };

    const fetchProductList = async () => {
        try {
            const res = await getProductByCategory(activeCategory);
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
    }, [activeCategory]);

    useEffect(() => {
        fetchCategoryList();
    }, []);

    return (
        <div className="flex bg-[#F6A96C]">
            <div className="w-full px-12 py-16 flex flex-col gap-16">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="cormorant-garamond-bold text-2xl md:text-5xl mt-1 font-bold leading-tight">Products</h1>
                        <div className="w-12 border-t-[1px] border-black border-solid"></div>
                    </div>
                    <h1 className="dancing-script text-6xl md:text-8xl -mt-3 md:-mt-6 font-bold text-white">Showcase</h1>
                </div>
                <div className="flex justify-center">
                    <div className="flex w-full md:w-3/5 justify-center gap-3 flex-wrap">
                        {categoryList.map(category => {
                            let isActive = category.id_category === activeCategory ? 'bg-white text-sm py-2 px-4 font-bold rounded-full' : 'border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white';
                            return (
                                <button className={isActive} key={category.id_category} onClick={() => { setActiveCategory(category.id_category) }}>{category.name}</button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col w-full gap-8 items-center">
                    <SliderGallery productList={productList} />
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3 border-t-[1px] border-black border-solid mt-10"></div>
                </div>
            </div>
        </div>
    );
};


export default Gallery;
