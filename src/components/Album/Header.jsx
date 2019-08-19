import React from 'react';
import styled from 'styled-components'
import { Col, Row } from 'reactstrap'

const ArtistHeader = props => (
    <div>
        <a target="_blank" rel="noopener noreferrer" href={props.artist.link}>
            <Row>
                <Col md={6} sm={12}>
                    <img className="rounded-circle" src={props.artist.picture_medium} alt="artist" />
                </Col>
                <Col md={6} sm={12}>
                    <SpanStyled>
                    <h1>{props.artist.name}</h1>
                    <p>Albums: {props.artist.nb_album}</p>
                    <p>Fans{props.artist.nb_fan}</p>
                    </SpanStyled>
                </Col>
            </Row>
        </a>
    </div>
)

export default ArtistHeader

const SpanStyled = styled.span`
    color:black;

    &:hover, &:focus{
        text-decoration: underline;
        color: black;
    }
`
