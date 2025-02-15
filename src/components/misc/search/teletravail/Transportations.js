import React, { useContext } from 'react'
import styled from 'styled-components'

import TransportationContext from 'utils/TransportationContext'
import SearchContext from 'utils/SearchContext'
import Transportation from './transportations/Transportation'

const Wrapper = styled.div`
  margin: 2rem auto;
`
const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -0.375rem 0.125rem;
`
const Result = styled.div`
  font-weight: 300;
  text-align: center;
`
export default function Transportations() {
  const { itineraryTransportations: transportations } = useContext(
    TransportationContext
  )
  const { start, end, teletravailTransportation } = useContext(SearchContext)
  const { t, i18n } = ri18n.useTranslation()

  return (
    start &&
    end && (
      <Wrapper>
        <List>
          {transportations
            .filter(
              (transportation) =>
                transportation.default && !transportation.carpool && transportation.id != 1011
            )
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((transportation) => (
              <Transportation transportation={transportation} />
            ))}
        </List>
        <Result>
          {transportations.find(
            (transportation) => transportation.id === teletravailTransportation
          )?.label[i18n.language] || t('transportations.1')}
        </Result>
      </Wrapper>
    )
  )
}
