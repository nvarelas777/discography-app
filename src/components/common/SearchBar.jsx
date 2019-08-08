import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Container,Form, FormGroup, Input, Button,Label, Row, Col, InputGroup } from 'reactstrap';

export default class SearchBar extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            Link: false,
            search: '',
        }
    }

    handleInput = e => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (  
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <Form inline>
                            <Col lg={11} sm={10}>
                                <InputStyled type="text" placeholder="Search" onChange={(e) => this.handleInput(e)}></InputStyled>
                            </Col>
                            <Col lg={1} sm={2}>
                                <Link to={`/search/${this.state.search}`}>
                                    <Button color="info">Search</Button>
                                </Link>
                            </Col>
                        </Form>
                    </Col>
                </Row>
            </Container>  
        )
    }
}

const InputStyled = styled.input`
border-radius:6px;
padding: 3px;
width: 100%;
`
