import React from 'react'
import styled from 'styled-components'
import { Media, Container } from 'reactstrap'
import discologo from '../../resources/discologo.png';

const Logo = () => (
    <ContainerStyled>
        <Media>
            <ImgStyled object src={discologo}/>
        </Media>
    </ContainerStyled>
)

export default Logo

const ImgStyled = styled.img`
    max-width: 100%;
    height: auto;
    margin-left:auto;
    margin-right:auto;
`

const ContainerStyled = styled(Container)`
margin-bottom: 20px;
margin-top: 20px;
`