import React from 'react';
import {Article, Container, Flex, Main, Span} from "../Components/LandingElements";
import Navigation from "../Components/Navigation";
import ButtonNext from "../Components/ButtonNext";

const Landing = () => {
    return (
        <Container>
            <Navigation url={"/LandingPage.png"}/>
            <Main>
                <Article>
                    CHESS SAYS <Span>A LOT ABOUT</Span> <br/> WHO WE ARE
                </Article>
                    <Flex>
                        <ButtonNext arrowExist = {true} href = {"/info"}>Get Started</ButtonNext>
                    </Flex>
            </Main>
        </Container>
    );
};

export default Landing;