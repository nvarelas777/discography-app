import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container,Form, Row, Col} from 'reactstrap';

export default class SearchBar extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            Link: false,
            search: '',
        }
    }

    handleInput = e => {
        this.props.setSearch(e.target.value);
    }

    clearSearch(){
        this.setState({
            search: ''
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
                                <InputStyled type="text" placeholder="Search" maxLength={36} onChange={(e) => this.handleInput(e)}></InputStyled>
                            </Col>
                            <Col lg={1} sm={2}>
                                <Link to={`/search/${this.props.search}`}>
                                    <ButtonStyled>Search</ButtonStyled>
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
padding: 4px;
width: 100%;
border: 2px solid black;
`
const ButtonStyled = styled.button`
padding: 4px;
padding-left: 10px;
padding-right: 10px;
border-radius: 4px;
border: 2px solid black;
background-color: black;
color: white;
font-weight: bold;
`
