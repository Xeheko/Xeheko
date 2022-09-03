import React from "react";
import { styled } from "goober";
import { Component } from "react";



function Header(){
    return(   
    <StyledHeader>Přihlásit se </StyledHeader>

    )
};


const StyledHeader = styled("h1")`

    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
    color: #0F0E12;


`;


export default Header;