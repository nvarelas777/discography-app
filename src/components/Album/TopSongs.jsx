import React from 'react';
import styled from 'styled-components'
import { Container } from 'reactstrap'

const displaySongs = songs => {
    return songs.map((currSong, i) => {
        return (
            <LiStyled >{currSong}</LiStyled >
        )
    })
}

const TopSongs = props => (
    <Container>
        <label>Top Songs</label>
        <ol>
            {displaySongs(props.songs)}
        </ol>
    </Container>
)

export default TopSongs

const LiStyled = styled.li`
text-align: left;
`