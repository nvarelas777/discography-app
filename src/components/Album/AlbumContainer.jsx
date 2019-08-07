import React from 'react';
import { Media, Col, Row, Container } from 'reactstrap'

const ArtistContainer = props => (
    <Container>
        <a href={props.album.link} target="_blank">
            <h5>{props.album.title}</h5>
            <Media>
                <Media object src={props.album.cover_medium} />
            </Media>
            <p>{props.album.release_date.substring(0,4)}</p>
        </a>
    </Container>
)

export default ArtistContainer