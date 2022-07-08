import React from 'react';
import {WelcomeTxt} from "./LandingElements";

const Header = ({children}) => {
    return (
        <WelcomeTxt>
            {children}
        </WelcomeTxt>
    );
};

export default Header;