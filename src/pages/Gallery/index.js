import SliderGallery from "../../components/SliderGallery";

const Gallery = () => {
    return (
        <div className="flex bg-[#F6A96C]">
            <div className="w-full px-12 py-16 flex flex-col gap-16">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight">Products</h1>
                        <div className="w-12 border-t-[1px] border-black border-solid"></div>
                    </div>
                    <h1 className="dancing-script text-8xl -mt-9 font-bold text-white">Showcase</h1>
                </div>
                <div className="flex justify-center">
                    <div className="flex w-full md:w-3/5 justify-center gap-3 flex-wrap">
                        <button className="bg-white text-sm py-2 px-4 font-bold rounded-full">Breakfast</button>
                        <button className="border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white">Pastry</button>
                        <button className="border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white">Coffee</button>
                        <button className="border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white">Tea</button>
                        <button className="border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white">Smoothie</button>
                        <button className="border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white">Juice</button>
                        <button className="border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white">Salad</button>
                        <button className="border-white border-[1px] bg-none text-sm py-2 px-4 font-bold rounded-full text-white">Oat</button>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-8 items-center">
                    <SliderGallery />
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3 border-t-[1px] border-black border-solid mt-10"></div>
                </div>
            </div>
        </div>
    );
};


export default Gallery;
