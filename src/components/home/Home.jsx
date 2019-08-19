import React, {Component} from 'react';
import axios from 'axios'
import { Col, Row, Container, Spinner } from 'reactstrap'
import ResultContainer from '../Artists/ResultContainer';
import styled from 'styled-components';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            albums: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
            .then(res => {
                let albumArray = []
                res.data.data.forEach((currAlbum) => {
                    albumArray.push(currAlbum)
                })
                this.setState({
                    albums: albumArray,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    displayAlbums = () => {
        return this.state.albums.slice(0,9).map((currAlbum, i) => {  
                return (
                    <Col md={4} sm ={6} key={i}>
                        <ResultContainer album={currAlbum} />
                    </Col>
                )        
        })
    }

    render() {
        if (this.state.isLoading === true) {
            return (
                <div>
                    <h1>Trending Artists</h1>
                    <Spinner color="primary" />
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Trending Artists</h1>
                    <ContainerStyled>
                    <Row>
                        {this.displayAlbums()}
                    </Row>
                    </ContainerStyled>
                </div>
            )
        }
    }
}

const ContainerStyled = styled(Container)`
border: 2px solid black;
border-radius: 6px;
`