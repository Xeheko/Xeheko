import React from "react";
import { styled } from "goober";
import { Component } from "react";

function LoginText(){
    return(
    <PrimaryText>
        <FrgtTxt>
            <FrgtPass href="Send_Email" id="frgt">Zapomenuté heslo?</FrgtPass>
        </FrgtTxt>
        <Register>
            <h3>Nemáte účet?</h3>
            <a href="Register">Vytvořte si ho</a>
        </Register>    
    </PrimaryText> 
    )
};


const PrimaryText = styled("div")`
    display: flex;
    flex-direction: column;

`;

const FrgtTxt = styled("div")`
    margin-top: 40px;
    align-items: center;
    align-self: center;
`;

const FrgtPass = styled("a")`
    font-size: 16px;
    line-height: 18px;
    color: #1376C0;
    text-decoration: none;
    font-family: 'TWKLausanne';
`;

const Register = styled("div")`
    display: flex;
    flex-direction: row;
    margin-top: 8px;
a{
    font-size: 16px;
    line-height: 18px;
    color: #1376C0;
    text-decoration: none;
}

 h3{
    font-size: 16px;
    line-height: 18px;
    color: #0F0E12;
}
`;

export default LoginText;