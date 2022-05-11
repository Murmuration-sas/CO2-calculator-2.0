import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'
import { useItinerary } from 'hooks/useItineraries'
import YearlyFootprint from './teletravail/YearlyFootprint'
import PercentFootprint from './teletravail/PercentFootprint'
import Podcasts from './teletravail/Podcasts'
import Disclaimer from 'components/misc/Disclaimer'
import Search from 'components/misc/Search'

const Wrapper = styled.main`
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2vw;
`

const SearchWrapper = styled.main`
  flex-basis: 60%;
`

const RightColumnWrapper = styled.main`
  margin-top: 2rem;
  min-width: 35%;
`

export default function Teletravail() {
  const {
    start,
    end,
    teletravailTransportation,
    presentiel,
    teletravail,
    holidays,
    extraKm,
  } = useContext(SearchContext)

  const { itineraryTransportations: transportations } = useContext(
    TransportationContext
  )

  const [currentTransportation, setCurrentTransportation] = useState(null)
  useEffect(() => {
    setCurrentTransportation(
      transportations.find(
        (transportation) => transportation.id === teletravailTransportation
      )
    )
  }, [transportations, teletravailTransportation])

  const [distance, setDistance] = useState(0)
  const types = { car: 'driving', foot: 'walking', rail: 'driving' }
  const { data: itinerary } = useItinerary(
    start,
    end,
    types[currentTransportation?.type]
  )
  useEffect(() => {
    setDistance(
      itinerary &&
      itinerary[0].elements[0].status === 'OK' &&
      itinerary[0].elements[0].distance.value
    )
  }, [itinerary])

  const [emitted, setEmitted] = useState(0)
  const [saved, setSaved] = useState(0)
  useEffect(() => {
    if (distance && currentTransportation) {
      setSaved(
        Math.round(
          (currentTransportation.values[0].value *
            (distance - distance * extraKm) *
            teletravail *
            (52 - holidays - 1)) /
          1000000
        )
      )
      setEmitted(
        Math.round(
          (currentTransportation.values[0].value *
            distance *
            presentiel *
            (52 - holidays - 1)) /
          1000000
        )
      )
    }
  }, [
    presentiel,
    teletravail,
    holidays,
    extraKm,
    distance,
    currentTransportation,
  ])

  return (
    <Wrapper>
      <Container>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
        <RightColumnWrapper>
          {distance && currentTransportation && (
            <YearlyFootprint
              emitted={emitted}
              saved={saved}
              presentiel={presentiel}
              teletravail={teletravail}
            />
          )}
          {distance && currentTransportation && <PercentFootprint saved={saved} />}
          <Podcasts />
        </RightColumnWrapper>
      </Container>
      <Disclaimer itinerary />
    </Wrapper>
  )
}
