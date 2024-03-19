import { useContext } from "react";
import { MenuBookContext } from "../../contexts/MenuBookContext";
import { SlLocationPin, SlPhone } from "react-icons/sl";
import headerBackground from '../../assets/bg-header.jpg';
import OutletName from "../../components/OutletName";
import TextWithIcon from "../../components/TextWithIcon";

const Header = () => {
    const { merchantInfo } = useContext(MenuBookContext);

    return (
        <div className="flex flex-col md:flex-row md:h-screen">
            <div className="w-full md:w-1/2 p-12 flex flex-col gap-8">
                <div className="flex items-center gap-2 grow">
                    <OutletName merchantInfo={merchantInfo} />
                </div>
                <div className="flex flex-col items-start gap-10 grow">
                    <div className="cormorant-garamond-bold text-5xl mt-1 font-bold leading-tight">Experience Our <span className="bg-[#F6A96C]">Special Creations,</span><br /> Cooked Just for You.</div>
                    <button className="bg-[#F6A96C] text-sm py-2 px-4 font-bold rounded-full">Explore More</button>
                </div>
                <div className="flex flex-col gap-2 justify-end">
                    <TextWithIcon 
                        label={merchantInfo.address}
                        customStyle="text-xl"
                        icon={(<SlLocationPin />)}
                    />
                    <TextWithIcon 
                        label={merchantInfo.telephone}
                        customStyle="text-lg -mt-1"
                        icon={(<SlPhone />)}
                    />
                </div>
            </div>
            <div className="w-full h-96 md:h-screen grow md:grow-0 md:w-1/2 md:rounded-br-[180px] md:rounded-tl-[180px]" style={{ background: 'white', backgroundImage: `url(${headerBackground})`, backgroundSize: 'cover' }} />
        </div>
    );
};


export default Header;
