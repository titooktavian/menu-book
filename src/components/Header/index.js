import { SlLocationPin, SlPhone, SlSocialInstagram } from "react-icons/sl";
import headerBackground from '../../assets/bg-header.jpg';

const Header = () => {
  return (
    <div className="flex h-screen">
        <div className="w-1/2 p-12 flex flex-col gap-8">
            <div className="flex items-center gap-2 grow">
                <div>
                    <h1 className="cormorant-garamond-semibold text-3xl mt-1">Bavarian Bliss</h1>
                    <h1 className="dancing-script text-3xl text-[#EA9B58] -mt-3 font-bold">Pastries</h1>
                </div>
            </div>
            <div className="flex flex-col items-start gap-10 grow">
                <h1 className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight">Experience Our <span className="bg-[#F6A96C]">Special Creations,</span><br /> Cooked Just for You.</h1>
                <button className="bg-[#F6A96C] text-sm py-2 px-4 rounded-lg font-bold">Explore More</button>
            </div>
            <div className="flex flex-col gap-2 justify-end">
                <div className="flex gap-1 items-center">
                    <SlLocationPin />
                    <h1 className="cormorant-garamond-semibold text-xl"> 123 Main Street Anytown, USA</h1>
                </div>
                
                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                        <SlPhone />
                        <h1 className="cormorant-garamond-semibold text-lg -mt-1">+6285 8512 3456</h1>
                    </div>
                    <div className="flex gap-1 items-center">
                        <SlSocialInstagram />
                        <h1 className="cormorant-garamond-semibold text-lg -mt-1">bavarianbliss</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/2 rounded-br-[180px] rounded-tl-[180px]" style={{ background: 'white', backgroundImage: `url(${headerBackground})`, backgroundSize: 'cover' }} />
    </div>
  );
};


export default Header;
