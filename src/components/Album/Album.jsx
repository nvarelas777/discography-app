import React , { Component } from 'react';
import axios from 'axios'
import ArtistContainer from './AlbumContainer'
import ArtistHeader from './Header'
import TopSongs from './TopSongs'
import { Row, Col, Container,Spinner } from 'reactstrap'
import styled from 'styled-components'

export default class Artist extends Component {

    constructor(props){
        super(props)

        this.state = {
            artist: '',
            albums: [],
            songs: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        const [artistData, albumData, songData] = await Promise.all([
            axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + this.props.match.params.id),
            axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + this.props.match.params.id + "/albums"),
            axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + this.props.match.params.id + "/top")
        ]);

        let albumArray = [];
        let checkDuplicates = new Set();
        albumData.data.data.map((currAlbum, i) => {
            if(!checkDuplicates.has(currAlbum.title)){
                checkDuplicates.add(currAlbum.title);
                albumArray.push(currAlbum)
            }
        })

        let songArray = [];
        songData.data.data.map((currSong, i) => {
            songArray.push(currSong.title)
        })

        this.setState({
            artist: artistData.data,
            albums: albumArray,
            songs: songArray,
            isLoading: false
        })
    }

    displayAlbums = () => {
        return this.state.albums.map((currAlbum, i) => {
            return (
                <Col sm={4} key={i}>
                    <ArtistContainer album={currAlbum} />
                </Col>
            )
        })
    }

    render() {
        if(this.state.isLoading){
            return (
                <Container>
                    <Row>
                        <h1>{this.state.artist.name}</h1>
                    </Row>
                    <Spinner style={{ width: '5rem', height: '5rem' , color: 'primary'}} />
                </Container>
            )
        }
        return (
            <Container>
                <Row>
                    <Col sm={8}>              
                        <ArtistHeader artist={this.state.artist} />
                    </Col> 
                    <Col sm={4}>
                        <TopSongs songs={this.state.songs} />
                    </Col> 
                    </Row>
                    <HrStyled />              
                <Row>
                    {this.displayAlbums()}
                </Row>
            </Container>
        )
    }
}

const HrStyled = styled.hr`
 border: 1px solid black;
`