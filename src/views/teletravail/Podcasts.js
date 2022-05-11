import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'

const Wrapper = styled.div`
`
const Container = styled.div`
    position: relative;
    margin-bottom: 0.5rem;
    background-color: ${(props) => props.theme.colors.secondLight};
    border-radius: 1rem;
    padding: 1rem;
    text-align: center;
`

const Iframes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    overflow-y: scroll;
    height: 12rem;
`

export default function YearlyFootprint(props) {

    const [podcasts, setPodcasts] = useState([])

    useEffect(() => {
        axios.get(`/flockeo/wp-json/acf/v3/podcast`)
            .then(res => { setPodcasts(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    return (
        <Wrapper>
            <Container>
                <h1>À écouter durant vos trajets !</h1>
                <Iframes>
                    {
                        podcasts.map((e, index) => {
                            return <iframe src={'https://open.spotify.com/embed/episode/' + e.acf.identifiant_spotify} width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        })
                    }
                </Iframes>
                <br />
                <a href="https://flockeo.com/le-vert-a-moitie-plein/" target="_blank"><p>Voir plus</p></a>
            </Container>
        </Wrapper>
    )
}
