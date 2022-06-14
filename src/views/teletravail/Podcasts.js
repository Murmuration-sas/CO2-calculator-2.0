import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MagicLink from 'components/base/MagicLink'
import loader from 'data/podcast/loader.gif'

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

export default function Podcasts(props) {

    const [podcasts, setPodcasts] = useState([])
    const [showLoader, setShowLoader] = useState(false)
    const { t } = ri18n.useTranslation()

    useEffect(() => {
        setShowLoader(true)
        axios.get(`${env.FLOCKEO_URL}/wp-json/wp/v2/podcast`)
            .then(res => { setPodcasts(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    return (
        <Wrapper>
            <Container>
                <h1>{t('podcasts.1')}</h1>
                {showLoader == true && <img src={loader} />}
                {
                    <div style={showLoader === true ? { display: 'none' } : {}}>
                        <Iframes>
                            {
                                podcasts.map((e, index) => {
                                    return <iframe onLoad={(e) => { podcasts.lastIndexOf(index) ? setShowLoader(false) : null }}
                                        src={'https://open.spotify.com/embed/episode/' + e.acf.identifiant_spotify} width="90%" height="152" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                                })
                            }
                        </Iframes>
                        <br />
                        <MagicLink to="https://flockeo.com/le-vert-a-moitie-plein">{t('podcasts.2')}</MagicLink>
                    </div>
                }
            </Container>
        </Wrapper >
    )
}
