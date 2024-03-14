import { SlLocationPin, SlPhone, SlEnvolope, SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import OutletName from '../OutletName';

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row px-12 py-6 gap-12">
            <div className="flex flex-col w-full md:w-1/4 gap-3">
                <OutletName />
                <div className="roboto-black text-sm">Step into our European haven, where each dish tells a story of tradition and innovation. Experience the rich flavors of Europe in a charming and welcoming ambiance.</div>
            </div>
            <div className="flex flex-col w-full md:w-1/4 gap-2">
                <div className="roboto-black font-bold text-xl mb-2">Our Address</div>
                <div className="flex items-center gap-2">
                    <SlLocationPin />
                    <h1 className="roboto-black text-sm">123 Main Street Anytown, USA</h1>
                </div>
                <div className="flex items-center gap-2">
                    <SlPhone />
                    <h1 className="roboto-black text-sm">+6285 8512 3456</h1>
                </div>
                <div className="flex items-center gap-2">
                    <SlEnvolope />
                    <h1 className="roboto-black text-sm">contact@bavarianbliss.com</h1>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/4 gap-2">
                <div className="roboto-black font-bold text-xl mb-2">Working Hours</div>
                <div className="flex items-center gap-2">
                    <div className="roboto-black text-sm w-1/2">Monday - Friday</div>
                    <div className="roboto-black text-sm w-1/2">08:00 - 22:00</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="roboto-black text-sm w-1/2">Saturday</div>
                    <div className="roboto-black text-sm w-1/2">08:00 - 23:00</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="roboto-black text-sm w-1/2">Sunday</div>
                    <div className="roboto-black text-sm w-1/2">08:00 - 23:00</div>
                </div>
            </div>
            <div className="flex flex-col w-full md:w-1/4 gap-2">
                <div className="roboto-black font-bold text-xl mb-2">Follow Us</div>
                <div className="flex gap-2">
                    <button className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialFacebook />
                    </button>
                    <button className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialTwitter />
                    </button>
                    <button className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialInstagram />
                    </button>
                    <button className="border-[1px] border-black hover:border-0 hover:bg-[#F6A96C] w-8 h-8 text-md font-bold rounded-full flex justify-center items-center">
                        <SlSocialYoutube />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
