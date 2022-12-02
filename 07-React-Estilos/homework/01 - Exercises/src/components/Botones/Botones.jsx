import React from 'react';
import styled from 'styled-components';

const DivButtons = styled.div `
display:flex ;
flex-direction:row ;
justify-content:space-around ;
align-items:center ;
`
const Buttons = styled.button`
font-weight:bold ;
background-color:#8ef6e4 ;
border-radius:5px ;
margin:10px ;
padding:5px ;
&:hover{
  background-color: #262623c9;
  color: #8ef6e4;
  cursor: pointer;
  }
`

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
