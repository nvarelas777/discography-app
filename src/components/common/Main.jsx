import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import ResultTable from '../Artists/ResultTable'
import Album from '../Album/Album'
import { Container } from 'reactstrap'
import SearchBar from './SearchBar'
import styled from 'styled-components'

const Main = () => (
    <ContainerStyled>   
        <hr />
        <hr />
        <Route component={SearchBar} /> 
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search/:search' component={ResultTable} />
            <Route path='/artist/:id' component={Album} />
        </Switch>
    </ContainerStyled>
)

export default Main

const ContainerStyled = styled(Container)`
background-color: lightblue;
padding-top: 15px;
`