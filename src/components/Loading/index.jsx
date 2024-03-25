import { useContext } from "react";
import { MenuBookContext } from "../../contexts/MenuBookContext";
import { LOADING_DESCRIPTION, LOADING_TYPE } from "../../utils/constants";

const Loading = () => {
    const { showLoading } = useContext(MenuBookContext);
    return showLoading !== LOADING_TYPE.HIDDEN ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white bg-opacity-50 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <svg className="animate-spin h-12 w-12 text-[#F6A96C]" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
                <div className="roboto-black font-bold">
                    Fetching {LOADING_DESCRIPTION[showLoading]}
                </div>
            </div>
            
        </div>
    ) : null;
};
  
export default Loading;
