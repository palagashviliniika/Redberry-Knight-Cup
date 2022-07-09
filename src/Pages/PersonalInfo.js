import React from 'react';
import {Container, FormName, FormNameBasics, Main, MainContainer} from "../Components/LandingElements";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import Wizard from "../Components/Wizard";
import Form from "../Components/Form";

const PersonalInfo = () => {
    return (
        <Container>
            <Navigation url={"/PersonalInfo.png"} author = {"-EMANUEL LASKER"} quoteMargins={"211px 0 0 132px"} authorMargins = {"24px 0 0 0"} authorColor = {"#E5E6E8"}>
                "WHEN YOU SEE A GOOD MOVE, <br/>
                LOOK FOR A BETTER ONE."
            </Navigation>
            <Main color = {"#FFFFFF"}>
                    <Header>
                        Start Creating Your Account
                    </Header>
                <MainContainer Margin = {"48px"}>
                    <Wizard secondBackColor = {"#F5F5F5"} secondTextColor = {"#95939A"}/>
                    <FormName>
                        Personal information
                        <FormNameBasics>This Is Basic Information Fields</FormNameBasics>
                    </FormName>
                    <Form />
                </MainContainer>
            </Main>
        </Container>
    );
};

export default PersonalInfo;