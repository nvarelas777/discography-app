import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { Container,Form, FormGroup, Input, Button, Row, Col } from 'reactstrap';

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
            <Form>
                    <FormGroup>
                        <Row>
                            <Col sm={{offset: 3, span:53}}>
                                <Input type="Search" placeholder="Search" onChange={(e) => this.handleInput(e)}></Input>
                            </Col>
                            <Col sm={1}>
                                <Link to={`/search/${this.state.search}`}>
                                    <Button>Search</Button>
                                </Link>
                            </Col>
                        </Row>
                    </FormGroup>
            </Form>
            
        )
    }
}