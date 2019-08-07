import React , { Component } from 'react';
import axios from 'axios'
import ArtistContainer from './AlbumContainer'
import ArtistHeader from './Header'
import { Row, Col, Container,Spinner } from 'reactstrap'

export default class Artist extends Component {

    constructor(props){
        super(props)

        this.state = {
            artist: '',
            albums: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        const [artistData, albumData] = await Promise.all([
            axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + this.props.match.params.id),
            axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + this.props.match.params.id + "/albums")
        ]);

        let albumArray = [];
        let checkDuplicates = new Set();
        albumData.data.data.map((currAlbum, i) => {
            if(!checkDuplicates.has(currAlbum.title)){
                checkDuplicates.add(currAlbum.title);
                albumArray.push(currAlbum)
            }
        })

        this.setState({
            artist: artistData.data,
            albums: albumArray,
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
                    <ArtistHeader artist={this.state.artist} />
                    <hr />              
                <Row>
                    {this.displayAlbums()}
                </Row>
            </Container>
        )
    }
}