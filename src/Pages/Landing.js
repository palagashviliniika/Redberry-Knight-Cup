import React from 'react';
import {Article, Container, Main, Span} from "../Components/LandingElements";
import Navigation from "../Components/Navigation";
import Button from "../Components/Button";

const Landing = () => {
    return (
        <Container>
            <Navigation url={"/LandingPage.png"}/>
            <Main>
                <Article>
                    CHESS SAYS <Span>A LOT ABOUT</Span> <br/> WHO WE ARE
                </Article>
                <Button>Get Started</Button>
            </Main>
        </Container>
    );
};

export default Landing;