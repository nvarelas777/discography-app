import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
import ArtistContainer from '../Album/AlbumContainer';
import { Col, Row, Container, Form, Spinner } from 'reactstrap'
import ResultContainer from '../Artists/ResultContainer';
import styled from 'styled-components';
import SearchBar from '../common/SearchBar'

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
                res.data.data.map((currAlbum,i) => {
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
        return this.state.albums.map((currAlbum,i) => {
            return (
                <Col sm={4} key={i}>
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