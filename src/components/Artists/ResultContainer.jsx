import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'reactstrap'
import styled from 'styled-components'

const ResultContainer = props => (
    <ContainerStyled>
        <Link to={`/artist/${props.album.id}`} >
            <HStyled>{props.album.name}</HStyled>            
            <img className="rounded" object src={props.album.picture_medium} />           
        </Link>
    </ContainerStyled>
)

export default ResultContainer

const ContainerStyled = styled(Container)`
    transition: transform .2s;
    margin-top:10px;
    margin-bottom: 10px;
    &:hover{
        transform: scale(1.1)
    }
`

const HStyled = styled.h5`
    color:black;
`
