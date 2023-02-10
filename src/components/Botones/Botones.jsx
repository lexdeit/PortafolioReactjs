import React from 'react';
import styled from 'styled-components';
const DivButtons = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Buttons = styled.button `
  border: 1px solid transparent;
  border-radius: 3em;
  margin: 3em;
  padding: 1em 3em 1em 3em;
  font-family: Poppins;
  box-shadow: 0px 10px 10px rgba(74, 74, 74, 0.1);
  background: linear-gradient(90deg, #0c00ff, #00f1ff, #ff00e8, #0800a4);
  background-size: 700%;
  z-index: 1;
  position: relative;
  color: white;
  transition: 250ms;
  &:hover {
    animation: animate 10s linear infinite;
    transition: 250ms;
    padding-left: 4em;
    padding-right: 4em;
    color: white;
    // margin: 0em 3.5em 0em 3.5em;
    margin: 0em 2.5em 0em 1.5em;
  }

  @keyframes animate {
    0%{
      background-position: 0%;
    }
    100%{
      background-position: 400%;
    }
  }

  &:before{
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #0c00ff, #00f1ff, #ff00e8, #0800a4);
    background-size: 400%;
    border-radius: 40px;
    opacity: 0;
    transition: 0.5s;
  
  }

  &:hover:before{
    filter: blur(25px);
    opacity: .6;
    animation: animate 10s linear infinite;
  }

`;


export default class Botones extends React.Component {
  render () {
    return (
      <DivButtons>
        <Buttons>Github</Buttons>
        <Buttons>LinkedIn</Buttons>
      </DivButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }