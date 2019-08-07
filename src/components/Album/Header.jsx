import React from 'react';
import { Container, Col, Media,Row } from 'reactstrap'

const ArtistHeader = props => (
    <Container>
        <a target="_blank" href={props.artist.link}>
        <Row>
        <Col sm={3}>           
                <Media object src={props.artist.picture_medium} />          
        </Col>
        <Col sm={6}>
            <h1>{props.artist.name}</h1>
            <p>Albums: {props.artist.nb_album}</p>
            <p>Fans: {props.artist.nb_fan}</p>
        </Col>
        </Row>
        </a>
    </Container>
)

export default ArtistHeader