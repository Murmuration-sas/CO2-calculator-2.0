import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import ModalContext from 'utils/ModalContext'
import Address from './itinerary/Address'
import Transportations from './teletravail/Transportations'
import Days from './teletravail/Days'

const Wrapper = styled.div``
const Details = styled.button`
  display: block;
  margin: 0 auto;
  padding: 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
`
export default function Teletravail() {
  const { start, setStartPlace, end, setEndPlace, teletravailTransportation } =
    useContext(SearchContext)
  const { setTeletravail } = useContext(ModalContext)
  const { t } = ri18n.useTranslation()

  return (
    <Wrapper>
      <Address
        placeholder={t('teletravail.1')}
        address={start?.address}
        setPlace={setStartPlace}
      />
      <Address
        placeholder={t('teletravail.2')}
        address={end?.address}
        setPlace={setEndPlace}
      />
      <Transportations />
      <Days />
      {start && end && teletravailTransportation && (
        <Details onClick={() => setTeletravail(true)}>
          {t('teletravail.3')}
        </Details>
      )}
    </Wrapper>
  )
}
