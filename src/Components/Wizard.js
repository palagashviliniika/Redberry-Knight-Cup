import React from 'react';
import {
    Hr,
    Wiz,
    WizFirst,
    WizFirstChild,
    WizInfo,
    WizSecond,
    WizSecondChild,
    WizTxt
} from "./LandingElements";

const Wizard = ({firstBackColor, firstTextColor, secondBackColor, secondTextColor}) => {
    return (
        <Wiz>
            <WizInfo>
                <WizFirst>
                    <WizFirstChild>
                        1
                    </WizFirstChild>
                </WizFirst>
                <WizTxt>
                    Personal Info
                </WizTxt>
            </WizInfo>

            <div>
                <Hr/>
            </div>

            <WizInfo>
                <WizSecond backColor = {secondBackColor}>
                    <WizSecondChild textColor = {secondTextColor}>
                        2
                    </WizSecondChild>
                </WizSecond>
                <WizTxt>
                    Chess Experience
                </WizTxt>
            </WizInfo>
        </Wiz>
    );
};

export default Wizard;