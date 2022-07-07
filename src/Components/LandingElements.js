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
  background-color: #FD5334;
  min-width: 52%;
`

export const Article = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-size: 80px;
  font-weight: 800;
  color: white;
  padding: 265px 0 0 85px;
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
  margin-left:85px;
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