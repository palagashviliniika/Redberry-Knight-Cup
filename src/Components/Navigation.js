import React from 'react';
import {Author, Image, Logo, Nav, Quote} from "./LandingElements";
import {Crown} from "../Icons/Icons";

const Navigation = ({url, children, author, quoteMargins, authorMargins, authorColor}) => {
    return (
        <Image url={url}>
            <Nav>
                <Crown />
                <Logo>
                    Redberry Knight Cup
                </Logo>
            </Nav>

            <Quote quoteMargins = {quoteMargins}>
                {children}
                <Author authorMargins = {authorMargins} authorColor = {authorColor}>
                    {author}
                </Author>
            </Quote>
        </Image>
    );
};

export default Navigation;