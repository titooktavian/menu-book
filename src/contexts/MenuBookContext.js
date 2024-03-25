import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMerchantInfo } from '../api';
import { LOADING_TYPE } from '../utils/constants';

const SetValueContext = () => {
    const [merchantInfo, setMerchantInfo] = useState({});
    const [showLoading, setShowLoading] = useState(LOADING_TYPE.RESTAURANT);

    const fetchMerchantInfo = async () => {
        try {
            const res = await getMerchantInfo();
            if (res.error) throw res.error;
            setMerchantInfo(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            setShowLoading(LOADING_TYPE.BREAKFAST);
        }
    };

    useEffect(() => {
        fetchMerchantInfo();
    }, []);

    return {
        merchantInfo,
        showLoading,
        setShowLoading,
    };
};

export const MenuBookContext = React.createContext();

const MenuBookProvider = ({ children, parentProps }) => {
    const value = SetValueContext(parentProps);

    return (
        <MenuBookContext.Provider value={{ ...value }}>
            {children}
        </MenuBookContext.Provider>
    );
};

MenuBookProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default MenuBookProvider;
