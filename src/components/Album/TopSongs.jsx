import React from 'react';
import styled from 'styled-components'
import { Container } from 'reactstrap'

const displaySongs = songs => {
    return songs.data.map((currSong, i) => {
        return (
            <LiStyled key={i} href={currSong.link} target="_blank" >
                <li>{currSong.title}</li>
            </LiStyled>
        )
    })
}

const TopSongs = props => (
    <Container>
        <LabelStyled>Top Songs</LabelStyled>
        <ol>
            {displaySongs(props.songs)}
        </ol>
    </Container>
)

export default TopSongs

const LiStyled = styled.a`
    text-align: left;
    color:black;
    &:hover, &:focus {
        text-decoration: underline;
        color:black;
    }
`

const LabelStyled = styled.label`
font-weight: bold;
font-size:20px;`