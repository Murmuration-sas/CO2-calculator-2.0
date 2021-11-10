import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled(MagicLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`
const Svg = styled.svg`
  width: 3.5rem;
  height: auto;
  margin-right: 0.5rem;
`
const Title = styled.h1`
  margin: 0;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.main};
`
export default function Logo() {
  return (
    <Wrapper to='/'>
      <Svg
        width='56'
        height='56'
        viewBox='0 0 56 56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M0 0H56V56H0V0Z' fill='white' />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M53.6667 2.33333H2.33333V53.6667H53.6667V2.33333ZM0 0V56H56V0H0Z'
          fill='#DE0244'
        />
        <mask
          id='mask0_304:3'
          maskUnits='userSpaceOnUse'
          style={{ 'mask-type': 'alpha' }}
          x='2'
          y='2'
          width='52'
          height='52'
        >
          <path
            d='M2.33336 2.33333H53.6667V53.6667H2.33336V2.33333Z'
            fill='#C4C4C4'
          />
        </mask>
        <g mask='url(#mask0_304:3)'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M2.10007 46C26.3454 46 46.0001 26.3453 46.0001 2.10001C46.0001 -22.1453 26.3454 -41.8 2.10007 -41.8C-22.1452 -41.8 -41.7999 -22.1453 -41.7999 2.10001C-41.7999 26.3453 -22.1452 46 2.10007 46ZM2.10007 56C31.8682 56 56.0001 31.8682 56.0001 2.10001C56.0001 -27.6681 31.8682 -51.8 2.10007 -51.8C-27.6681 -51.8 -51.7999 -27.6681 -51.7999 2.10001C-51.7999 31.8682 -27.6681 56 2.10007 56Z'
            fill='#DE0244'
          />
          <path
            d='M-45.4999 1.52588e-05H49.0001V3.50002H-45.4999V1.52588e-05Z'
            fill='#DE0244'
          />
          <path
            d='M-40.0447 23.8595L41.7947 -23.3905L43.5447 -20.3594L-38.2947 26.8906L-40.0447 23.8595Z'
            fill='#DE0244'
          />
          <path
            d='M-23.3904 41.7947L23.8596 -40.0447L26.8906 -38.2947L-20.3594 43.5447L-23.3904 41.7947Z'
            fill='#DE0244'
          />
          <path
            d='M8.39233e-05 49L8.01086e-05 -45.5H3.50008L3.50008 49H8.39233e-05Z'
            fill='#DE0244'
          />
          <path
            d='M23.8596 43.5447L-23.3904 -38.2947L-20.3594 -40.0447L26.8906 41.7947L23.8596 43.5447Z'
            fill='#DE0244'
          />
          <path
            d='M41.7948 26.8906L-40.0446 -20.3594L-38.2946 -23.3905L43.5448 23.8595L41.7948 26.8906Z'
            fill='#DE0244'
          />
        </g>
      </Svg>

      <Title>
        Mon
        <br />
        Impact
        <br />
        Transport
      </Title>
    </Wrapper>
  )
}