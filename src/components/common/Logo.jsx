import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom';
import discologo from '../../resources/discologo.png';



const Logo = () => (
    <ContainerStyled >
        <Link to='/'>      
            <ImgStyled object src={discologo}/>      
        </Link>
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