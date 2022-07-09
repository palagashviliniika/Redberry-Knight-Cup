import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Logo = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: white;
  padding: 2px 0 0 8px;
`

export const Container = styled.div`
  display: flex;
  max-width: 100%;
`

export const MainContainer = styled.div`
  margin-left: ${(props) => props.Margin};
`

export const Nav = styled.div`
  background-color: #7025FB;
  max-width: 100%;
  display: flex;
  padding: 30px 0 31px 60px;
  font-size: 22px;
  align-items: center;
`

export const Image = styled.div`
  background: url(${(props) => props.url});
  min-width: 48%;
  height: 100vh;
`

export const Main = styled.div`
  background-color: ${(props) => props.color};
  min-width: 52%;
`

export const Article = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-size: 80px;
  font-weight: 800;
  color: white;
  padding-top: 265px;
  margin-bottom: 102px;
`

export const Span = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #212529;
  vertical-align: 20px;
`

export const BtnNext = styled(Link)`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding: 13px 24px;
  border-radius: 8px;
  border: 5px solid #212529;
  background-color: #212529;
  color: white;
  cursor: pointer;
  transition: 0.2s all linear;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover{
    border: 5px solid rgb(194, 165, 249, .8);
  }
`

export const BtnText = styled.div`
    padding-right: ${(props) => props.arrowExist ? "12px" : "0px"};
`

export const Flex = styled.div`
  display: flex;
`

export const Quote = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: 26px;
  margin: ${(props) => props.quoteMargins};
  color: #212529;
`

export const Author = styled.h6`
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-style: italic;
  font-size: 24px;
  color: ${(props) => props.authorColor};
  margin: ${(props) => props.authorMargins};
`

export const WelcomeTxt = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #212529;
  padding: 35px 0 35px 48px;
  border-bottom: 1px solid rgba(185, 180, 196, 0.3);
`

export const Wiz = styled.div`
  margin: 60px 0 112px 0;
  display: flex;
`

export const WizInfo=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WizFirst = styled.div`
  background-color: ${(props) => props.backColor ? props.backColor : "transparent"};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E5E6E8;
  border-radius: 8px;
`

export const WizFirstChild = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.textColor ? props.textColor : "#212529"};
`

export const WizTxt = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  margin-top: 4px;
`

export const WizSecond = styled.div`
  background-color: ${(props) => props.backColor ? props.backColor : "transparent"};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E5E6E8;
  border-radius: 8px;
`

export const WizSecondChild = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.textColor ? props.textColor : "#212529"};
`

export const Hr = styled.hr`
  width: 174px;
  border: 1px solid rgba(185, 180, 196, 0.3);
  margin: 20px -41px 0 -25px;
`

export const FormName = styled.div`
  font-weight: 600;
  font-size: 32px;
  color: #000000;
`

export const FormNameBasics = styled.div`
  font-size: 14px;
  color: #95939A;
  margin-top: 3px;
`

export const Modal = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`

export const ModalHeader = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
`

export const ModalTxt = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
`

export const ModalTitle = styled.div`
  
`

export const ModalClose = styled.button`
  
`

