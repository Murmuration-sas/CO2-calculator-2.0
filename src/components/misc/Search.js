import React, { useContext } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import TransportationContext from 'utils/TransportationContext'
import ModalContext from 'utils/ModalContext'
import Checkbox from 'components/base/Checkbox'
import ModeSelector from './search/ModeSelector'
import Distance from './search/Distance'
import Itinerary from './search/Itinerary'
import Teletravail from './search/Teletravail'
import LanguageSwitcher from './LanguageSwitcher'

const Wrapper = styled.div``
const Content = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border-radius: 1rem;

  ${(props) => props.theme.mq.small} {
    padding: 1rem;
  }
`
const Text = styled.p`
  max-width: 26rem;
  margin: 0 auto 1rem;
  text-align: center;

  ${(props) => props.theme.mq.small} {
    font-size: 0.875rem;
  }
`
const Color = styled.button`
  padding: 0;
  color: ${(props) => props.theme.colors.second};
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const StyledCheckbox = styled(Checkbox)`
  font-size: 0.875rem;

  &:first-child {
    margin-bottom: 0.375rem;
  }

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }
`
export default function Search() {
  const { displayAll, setDisplayAll, carpool, setCarpool } = useContext(
    TransportationContext
  )
  const { setOccupancy } = useContext(ModalContext)
  const { t } = useTranslation()

  return (
    <Wrapper>
      <LanguageSwitcher />
      <ModeSelector />
      <Content>
        <Switch>
          <Route path='/'>
            <Text>
              {t('search.1')}{' '}
              <Color onClick={() => setOccupancy(true)}>({t('search.2')})</Color>{' '}
              {t('search.3')}
            </Text>
            <Itinerary />
          </Route>
          <Route path='/teletravail'>
            <Text>
              {t('search.4')}
            </Text>
            <Teletravail />
          </Route>
          <Route>
            <Text>
              {t('search.1')}{' '}
              <Color onClick={() => setOccupancy(true)}>({t('search.2')})</Color>{' '}
              {t('search.5')}
            </Text>
            <Distance />
          </Route>
        </Switch>
      </Content>
      <Checkboxes>
        <Route path='/' exact>
          <StyledCheckbox
            name='display-all'
            checked={displayAll}
            onChange={setDisplayAll}
          >
            {t('search.6')}
          </StyledCheckbox>
          <StyledCheckbox
            name='carpool'
            checked={carpool}
            onChange={() => setCarpool((prevCarpool) => (prevCarpool ? 0 : 2))}
          >
            {t('search.7')}
          </StyledCheckbox>
        </Route>
        <Route path='/itineraire'>
          <StyledCheckbox
            name='carpool-2'
            checked={carpool}
            onChange={() => setCarpool((prevCarpool) => (prevCarpool ? 0 : 2))}
          >
            {t('search.7')}
          </StyledCheckbox>
        </Route>
      </Checkboxes>
    </Wrapper>
  )
}
