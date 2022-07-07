import React from 'react';
import {Image, Logo, Nav} from "./LandingElements";
import {Crown} from "../Icons/Icons";

const Navigation = ({url}) => {
    return (
        <Image url={url}>
            <Nav>
                <Crown />
                <Logo>
                    Redberry Knight Cup
                </Logo>
            </Nav>
        </Image>
    );
};

export default Navigation;