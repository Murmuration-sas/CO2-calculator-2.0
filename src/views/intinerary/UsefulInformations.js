import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import axios from 'axios'
import currency from 'data/flockeo/currency.png'
import cutlery from 'data/flockeo/cutlery.png'
import bed from 'data/flockeo/bed.png'

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

const Wrp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`

const Btn = styled.button`
    padding: 0.6rem 2rem;
    color: #fff;
    background-image: linear-gradient(to right, #86b923, #02a59d);
    border-bottom: none;
    border-radius: 1.7rem;
    border: none;
    cursor: pointer;
    width: 75%;
    margin-top: 1rem;
`

const Row = styled.div`
`

export default function UsefulInformations(props) {

    const [infos, setInfos] = useState([])
    const [country, setCountry] = useState('')

    useEffect(() => {
        axios.get(`/flockeo/wp-json/acf/v3/pays?search=${country}&per_page=1`)
            .then(res => { setInfos(res.data[0].acf) })
            .catch(err => { console.log(err) })
    }, [country])

    useEffect(() => {
        if (props.end) setCountry(props.end.address.match(/(^([^,]+.*), )*(.*)/).at(-1))
    }, [props])

    return (
        <Wrapper>
            <Container>
                <h1>Infos utiles</h1>
                <p style={{ marginTop: '-1rem', marginBottom: '2rem' }}>{country}</p>
                <Wrp>
                    <Row>
                        <img src={currency} /><p> {infos.monnaie}</p>
                    </Row>
                    <Row>
                        <img src={cutlery} /><p> {infos.prix_moyen_repas}€</p>
                    </Row>
                    <Row>
                        <img src={bed} /><p> {infos.prix_moyen_hotel}€</p>
                    </Row>
                </Wrp>
                <a href={'https://flockeo.com/pays/' + country} target="_blank"><Btn>Trouver un logement responsable</Btn></a>
            </Container>
        </Wrapper >
    )
}