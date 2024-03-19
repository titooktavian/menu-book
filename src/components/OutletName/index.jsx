const OutletName = ({ merchantInfo }) => {
    const outletName = merchantInfo && merchantInfo.merchant_name ? merchantInfo.merchant_name.split(" ") : '';

    return (
        <div>
            <h1 className="cormorant-garamond-bold text-3xl mt-1">{outletName[0] || ''}</h1>
            <h1 className="dancing-script text-3xl text-[#EA9B58] -mt-3 font-bold">{outletName[1] || ''}</h1>
        </div>
    );
};

export default OutletName;
