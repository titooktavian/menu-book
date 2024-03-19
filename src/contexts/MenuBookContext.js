import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMerchantInfo } from '../api';

const SetValueContext = () => {
    const [merchantInfo, setMerchantInfo] = useState({});

    const fetchMerchantInfo = async () => {
        try {
            const res = await getMerchantInfo();
            if (res.error) throw res.error;
            setMerchantInfo(res.data);
        } catch (e) {
            console.log(e.message);
        } finally {
            // hideProgress();
        }
    };

    useEffect(() => {
        fetchMerchantInfo();
    }, []);

    return {
        merchantInfo,
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
