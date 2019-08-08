import React from 'react';
import { Media, Col, Row, Container } from 'reactstrap'
import styled from 'styled-components'

const ArtistContainer = props => (
    <ContainerStyled>
        <a href={props.album.link} target="_blank">
            <H5Styled>{props.album.title}</H5Styled>
            <img className="rounded" object src={props.album.cover_medium} />
            <PStyled>{props.album.release_date.substring(0,4)}</PStyled>
        </a>
    </ContainerStyled>
)

export default ArtistContainer

const ContainerStyled = styled(Container)`
    transition: transform .2s;
    margin-top:10px;
    margin-bottom: 10px;
    &:hover{
        transform: scale(1.1);
    }
`

const H5Styled = styled.h5`
color:black;
`

const PStyled = styled.p`
color:black;
`