import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import ResultTable from '../Artists/ResultTable'
import Album from '../Album/Album'
import { Container } from 'reactstrap'
import SearchBar from './SearchBar'
import Logo from './Logo'
import styled from 'styled-components'

export default class Main extends Component {

    constructor(props){
        super(props)

        this.state = {
            search: ''
        }
    }

    setSearch = state => {
        this.setState({
            search: state
        })
    }

    render() {
        return (
            <ContainerStyled>
                <Logo />
                <SearchBar setSearch={this.setSearch} search={this.state.search}/>
                <HrStyled />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/search/:search' component={ResultTable} />
                    <Route path='/artist/:id' component={Album} />
                </Switch>
            </ContainerStyled>
        )
    }
}

const ContainerStyled = styled(Container)`
background-color: lightblue;
padding-top: 15px;
padding-bottom: 20px;
`

const HrStyled = styled.hr`
 border: 1px solid black;
`