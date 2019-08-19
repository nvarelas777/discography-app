import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Spinner } from 'reactstrap'
import ResultContainer from './ResultContainer.jsx';
import styled from 'styled-components'

export default class ResultTable extends Component {
    constructor(props){
        super(props)

        this.state = {
            artist_data: '',
            albums: [],  
            album_pictures: [],
            isLoading: true       
        }

    }

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + this.props.match.params.search)
            .then(res => {
                let albumArray = [];
                res.data.data.forEach((currAlbum) => {
                    if(currAlbum.nb_album > 0){
                        albumArray.push(currAlbum);                  
                    }
                })
                this.setState({
                    albums: albumArray,
                    isLoading: false
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.search !== this.props.match.params.search){
            this.setState({
                isLoading: true
            })
            axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + this.props.match.params.search)
            .then(res => {
                let albumArray = [];
                res.data.data.forEach((currAlbum, i) => {
                    if(currAlbum.nb_album > 0){
                        albumArray.push(currAlbum);                  
                    }
                })
                this.setState({
                    albums: albumArray,
                    isLoading: false
                })
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }

    displayPictures = () => {
        return this.state.albums.map((currPic,i) => {
            return (
                <Col sm={4} key={i}>
                    <ResultContainer album={currPic} />
                </Col>
            )
        })
    }

    render(){
        if(this.state.isLoading === true){
            return (
                <div>
                    <HeaderStyled>Results for {this.props.match.params.search} ...</HeaderStyled>
                    <Spinner color="primary" />
                </div>
            )
        }
        if(this.state.albums.length === 0){
            return (
                <div>
                    <HeaderStyled>Results for {this.props.match.params.search} ...</HeaderStyled>
                    <br />
                    <h3>No results found</h3>
                </div>
            )
        }
        return(
            <div>
                <HeaderStyled>Results for {this.props.match.params.search} ...</HeaderStyled>
                <Row>
                    {this.displayPictures()}
                </Row>
            </div>
        )
    }
}

const HeaderStyled = styled.h5`
text-align: left;
margin: 10px;
`