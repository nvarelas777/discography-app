import React, { Component } from 'react';
import styled from 'styled-components'
import { Container } from 'reactstrap'

export default class Footer extends Component{

    render() {
        return (
            <ContainerStyled>
                <h1>footer</h1>
            </ContainerStyled>
        )
    }
}

const ContainerStyled = styled(Container)`
background-color: black;
color:white;
height: 100px;
`