import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/SearchContext'
import Selector from './days/Selector'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -0.75rem;
`
export default function Days() {
  const {
    start,
    end,
    teletravailTransportation,
    presentiel,
    setPresentiel,
    teletravail,
    setTeletravail,
    days,
  } = useContext(SearchContext)
  const { t } = ri18n.useTranslation()

  useEffect(() => {
    if (presentiel + teletravail !== days) {
      if (presentiel > days) {
        setPresentiel(days)
        setTeletravail(0)
      } else {
        setTeletravail(days - presentiel)
      }
    }
  }, [days, presentiel, teletravail, setPresentiel, setTeletravail])

  return (
    start &&
    end &&
    teletravailTransportation && (
      <Wrapper>
        <Selector
          label={t('days.1')}
          value={presentiel}
          onChange={(value) => {
            setPresentiel(value)
            setTeletravail(days - value)
          }}
        />
        <Selector
          label={t('days.2')}
          value={teletravail}
          onChange={(value) => {
            setTeletravail(value)
            setPresentiel(days - value)
          }}
        />
      </Wrapper>
    )
  )
}
