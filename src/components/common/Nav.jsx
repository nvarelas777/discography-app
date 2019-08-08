import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavItem } from 'reactstrap'
import styled from 'styled-components';
import SearchBar from './SearchBar'

const Navigation = () => (
    <NavbarStyled light navbar-expand-lg fixed="top">
        <Container>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <StyledLink to='/'>Home</StyledLink>
                </NavItem>
            </Nav>
        </Container>
    </NavbarStyled>
)

export default Navigation

const NavbarStyled = styled(Navbar)`
margin-left: 0;
margin-right: 0;
padding-bottom: 0px;
height: 55px;
background-color: black;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;