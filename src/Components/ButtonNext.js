import React, {useState} from 'react';
import {BtnNext, BtnText} from "./LandingElements";
import {Arrow} from "../Icons/Icons";

const ButtonNext = ({children, arrowExist, href}) => {
    return (
        <BtnNext to = {href}>
            <BtnText arrowExist = {arrowExist}>
                {children}
            </BtnText>

            {
                arrowExist &&
                <Arrow/>
            }
        </BtnNext>
    );
};

export default ButtonNext;