import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Media } from 'reactstrap'
import ResultContainer from './ResultContainer.jsx';
import styled from 'styled-components'

export default class ResultTable extends Component {
    constructor(props){
        super(props)

        this.state = {
            artist_data: '',
            albums: [],  
            album_pictures: []         
        }

    }

    componentDidMount() {
        axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" + this.props.match.params.search)
            .then(res => {
                let albumArray = [];
                res.data.data.map((currAlbum, i) => {
                    if(currAlbum.nb_album > 0){
                        albumArray.push(currAlbum);                  
                    }
                })
                this.setState({
                    albums: albumArray
                })
            })
            .catch(err =>{
                console.log(err)
            })

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