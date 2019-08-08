import React from 'react';
import styled from 'styled-components'
import { Container, Col, Media,Row } from 'reactstrap'

const ArtistHeader = props => (
    <div>
        <a target="_blank" href={props.artist.link}>
            <Row>
                <Col sm={6}>
                    <img className="rounded-circle" object src={props.artist.picture_medium} />
                </Col>
                <Col sm={6}>
                    <SpanStyled>
                    <h1>{props.artist.name}</h1>
                    <p>Albums: {props.artist.nb_album}</p>
                    <p>Fans: {props.artist.nb_fan}</p>
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
    text-decoration: none;
}
`