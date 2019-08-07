import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Row, Media } from 'reactstrap'

const ResultContainer = props => (  
    <Container>       
            <Link to={`/artist/${props.album.id}`} > 
            <h5>{props.album.name}</h5>
            <Media>
                <Media src={props.album.picture_medium} />
            </Media>      
            </Link>
    </Container>
)

export default ResultContainer