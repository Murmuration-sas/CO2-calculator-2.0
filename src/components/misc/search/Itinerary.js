import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Address from './itinerary/Address'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export default function Itinerary() {
  const { start, setStartPlace, end, setEndPlace } = useContext(SearchContext)
  const { t } = ri18n.useTranslation()

  return (
    <Wrapper>
      <Address
        placeholder={t('itinerary.1')}
        address={start?.address}
        setPlace={setStartPlace}
      />
      <Address
        placeholder={t('itinerary.2')}
        address={end?.address}
        setPlace={setEndPlace}
      />
    </Wrapper>
  )
}
