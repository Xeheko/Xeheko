import React from "react";
import { styled } from "goober";
import { Component } from "react";

function LoginButton(){
    return(
        <StyledButton>Přihlásit se</StyledButton>
    )
};


const StyledButton = styled("button")`
    width: 100%;
    padding: 16px 12px 14px 12px;
    background: #0F0E12;
    opacity: 0.4;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-weight: 300px;
    font-size: 20px;
    color: #fff;
    border: none;
    font-family: 'TWKLausanne';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;

&:hover{
    cursor: pointer;
    opacity: 60%;
}

&:focus{
        outline: none;
    }



`;

export default LoginButton;