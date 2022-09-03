import React from "react";
import { styled } from "goober";
import { Component } from "react";

function Copyright(){
    return(
        <StyledCopyright>© 2022 Apparently</StyledCopyright>
    )
};


const StyledCopyright = styled("h3")`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    color: #7F7F7F;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 24px;
`;

export default Copyright;