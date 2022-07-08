import React from 'react';
import {Container} from "../Components/LandingElements";
import Navigation from "../Components/Navigation";

const PersonalInfo = () => {
    return (
        <Container>
            <Navigation url={"/PersonalInfo.png"} author = {"-EMANUEL LASKER"} quoteMargins={"211px 0 0 132px"} authorMargins = {"24px 0 0 0"} aurhorColor = {"#E5E6E8"}>
                "WHEN YOU SEE A GOOD MOVE, <br/>
                LOOK FOR A BETTER ONE."
            </Navigation>
        </Container>
    );
};

export default PersonalInfo;