import React from "react";
import { styled } from "goober";
import { Component } from "react";
import { useDeferredValue } from "react";

function LoginInputs(){
    return( 
    <>
    <StyledEmail type="text" name="email" id="email" placeholder="Email"> </StyledEmail>
    <StyledPassword type="password" name="heslo" id="heslo" placeholder="Heslo"> </StyledPassword>
    </>
    )
};

const StyledEmail = styled("Input")`
    background: #F5F5F5;
    border-radius: 10px;
    border: none;
    height: 54px;
    padding-left: 14px;
    width: 100%;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #7F7F7F;

    &:focus{
        outline: none;
    }

`;



const StyledPassword = styled("Input")`
    background: #F5F5F5;
    border-radius: 10px;
    border: none;
    height: 54px;
    padding-left: 14px;
    width: 100%;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #7F7F7F;

    &:focus{
        outline: none;
    }


`;

export default LoginInputs;


