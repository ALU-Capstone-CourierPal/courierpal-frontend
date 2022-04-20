import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Animate = keyframes`

to {
    transform: rotate(360deg);
  }
`;

const WrapperBig = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 1002;
`;

const WrapperSmall = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerWrap = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Source = styled.div`
  box-shadow: 0px 5px 5px 3px #39aea9;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: ${Animate} 0.5s linear infinite;
`;

export default function Spinner() {
  return (
    <WrapperBig>
      <SpinnerWrap>
        <Source></Source>
      </SpinnerWrap>
    </WrapperBig>
  );
}

export function SpinnerSmall() {
  return (
    <WrapperSmall>
      <SpinnerWrap>
        <Source></Source>
      </SpinnerWrap>
    </WrapperSmall>
  );
}
