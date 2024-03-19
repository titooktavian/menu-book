import { useContext, useEffect, useState } from "react";
import { MenuBookContext } from "../../contexts/MenuBookContext";
import { SlLocationPin, SlPhone, SlEnvolope, SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import OutletName from '../OutletName';
import { getWorkingHours } from "../../api";

const Footer = () => {
    const { merchantInfo } = useContext(MenuBookContext);
    const [workingHours, setWorkingHours] = useState([]);
    
    const fetchWorkingHours = async () => {
        try {
            const res = await getWorkingHours();
            if (res.error) throw res.error;
            setWorkingHours(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            // hideProgress();
        }
    };

    useEffect(() => {
        fetchWorkingHours();
    }, []);

    return (
        <div className="flex flex-col md:flex-row px-12 py-6 gap-12">
            <div className="flex flex-col w-full md:w-1/4 gap-3">
                <OutletName merchantInfo={merchantInfo} />
                <div className="roboto-black text-sm">{merchantInfo.description}</div>
            </div>
            <div className="flex flex-col w-full md:w-1/4 gap-2">
                <div className="roboto-black font-bold text-xl mb-2">Our Address</div>
                <div className="flex items-center gap-2">
                    <SlLocationPin />
                    <h1 className="roboto-black text-sm">{merchantInfo.address}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <SlPhone />
                    <h1 className="roboto-black text-sm">{merchantInfo.telephone}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <SlEnvolope />
                    <h1 className="roboto-black text-sm">{merchantInfo.email}</h1>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/4 gap-2">
                <div className="roboto-black font-bold text-xl mb-2">Working Hours</div>
                {workingHours.map(item => (
                    <div className="flex items-center gap-2" key={item.id}>
                        <div className="roboto-black text-sm w-1/2">{item.description}</div>
                        <div className="roboto-black text-sm w-1/2">{item.duration}</div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col w-full md:w-1/4 gap-2">
                <div className="roboto-black font-bold text-xl mb-2">Follow Us</div>
                <div className="flex gap-2">
                    <a href={merchantInfo.facebook} target="_blank" rel="noreferrer" className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialFacebook />
                    </a>
                    <a href={merchantInfo.twitter} target="_blank" rel="noreferrer" className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialTwitter />
                    </a>
                    <a href={merchantInfo.instagram} target="_blank" rel="noreferrer" className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialInstagram />
                    </a>
                    <a href={merchantInfo.youtube} target="_blank" rel="noreferrer" className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
