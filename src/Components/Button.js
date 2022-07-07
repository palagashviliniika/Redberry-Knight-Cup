import React from 'react';
import {Btn} from "./LandingElements";

const Button = ({children}) => {
    return (
        <Btn>
            {children}
        </Btn>
    );
};

export default Button;