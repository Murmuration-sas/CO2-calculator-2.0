import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import MagicLink from 'components/base/MagicLink'

import Burger from './modeSelector/Burger'

const Wrapper = styled.nav`
  display: flex;
`
const Tab = styled(MagicLink)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-bottom: -1rem;
  padding: 0.25rem 0 1rem;
  color: ${(props) => props.theme.colors[props.current ? 'second' : 'main']};
  text-align: center;
  text-decoration: none;
  background-color: ${(props) =>
    props.current ? props.theme.colors.secondLight : 'transparent'};
  border-radius: 1rem 1rem 0 0;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: ${(props) =>
    props.theme.colors[props.current ? 'secondLight' : 'footer']};
  }

  ${(props) => props.theme.mq.small} {
    display: ${(props) => (props.large ? 'none' : 'flex')};
    margin-bottom: -1.25rem;
    padding: 0.25rem 0 1.25rem;
    font-size: 0.875rem;
  }
`
export default function ModeSelector() {
  const location = useLocation()
  const { t } = ri18n.useTranslation()

  return (
    <Wrapper>
      {/* <Tab current={location.pathname === '/'} to='/'>
        Distance
      </Tab> */}
      <Tab current={location.pathname === '/'} to='/'>
        {t('common.2')}
      </Tab>
      <Tab
        current={location.pathname === '/teletravail'}
        to='/teletravail'
        title={`Télétravail${location.pathname === '/teletravail' ? ' : page actuelle' : ''
          }`}
        large
      >
        {t('common.3')}
      </Tab>
      <Tab current={location.pathname === '/crowdfunding'} to='https://crowdfunding.flockeo.com'>
        Crowdfunding
      </Tab>
      <Burger location={location} />
    </Wrapper>
  )
}
