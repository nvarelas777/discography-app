import React, { Component } from 'react';
import styled from 'styled-components'
import { Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom';

export default class Footer extends Component{

    render() {
        return (
            <ContainerStyled>
                <DivStyled>
                    <Row>
                        <Link to='/'>Home</Link>
                    </Row>
                    <Row>
                        <a href='http://github.com/nvarelas777'>Github</a>
                    </Row>
                </DivStyled>
            </ContainerStyled>
        )
    }
}

const ContainerStyled = styled(Container)`
background-color: black;
color:white;
height: 100px;
text-align:center;
`
const DivStyled = styled.div`
color: white;
padding-top: 20px;
margin-left: 50px;
`
