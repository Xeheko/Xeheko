import { useState } from 'react'
import React from 'react'
import './App.css'
import { setup } from 'goober'
import { styled } from 'goober'
import Header from './components/header.jsx'
import LoginInputs from './components/input.jsx'
import LoginButton from './components/loginButton'
import LoginText from './components/logintext'
import Copyright from './components/copyright'


setup(React.createElement);

function App() {

  return (
    <DivApp>

      <DivLogin>

        <DivHeader>
          <Header />
        </DivHeader>

        <DivInputs>
          <LoginInputs />
        </DivInputs>

        <DivLoginButton>
          <LoginButton />
        </DivLoginButton>

        <DivLoginText>
          <LoginText />
        </DivLoginText>
        
        </DivLogin>

      <DivCopyright>
        <Copyright />
      </DivCopyright>
    
    </DivApp>
  )
};

const DivApp = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const DivLogin = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DivHeader = styled("div")`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const DivInputs = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;
  width: 400px;
`;

const DivLoginButton = styled("div")`
  display: flex;
  margin-top: 40px;
  width: 400px;
  align-self: center;
`;

const DivLoginText = styled("div")`
  align-self: center;
`;

const DivCopyright = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App
