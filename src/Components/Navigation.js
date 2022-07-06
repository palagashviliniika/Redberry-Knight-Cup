import React from 'react';
import {Logo, Nav} from "./LandingElements";
import {Crown} from "../Icons/Icons";

const Navigation = () => {
    return (
        <Nav>
            <Crown />
            <Logo>
                Redberry Knight Cup
            </Logo>
        </Nav>
    );
};

export default Navigation;