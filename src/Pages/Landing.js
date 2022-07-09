import React from 'react';
import {Article, Container, Flex, Main, MainContainer, Span} from "../Components/LandingElements";
import Navigation from "../Components/Navigation";
import ButtonNext from "../Components/ButtonNext";

const Landing = () => {
    return (
        <Container>
            <Navigation url={"/LandingPage.png"}/>
            <Main color = {"#FD5334"}>
                <MainContainer Margin = {"85px"}>
                    <Article>
                        CHESS SAYS <Span>A LOT ABOUT</Span> <br/> WHO WE ARE
                    </Article>
                    <Flex>
                        <ButtonNext arrowExist = {true} href = {"/info"}>Get Started</ButtonNext>
                    </Flex>
                </MainContainer>
            </Main>
        </Container>
    );
};

export default Landing;