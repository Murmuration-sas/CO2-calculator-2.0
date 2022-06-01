import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Emoji from 'components/base/Emoji'
import Carpool from './transportation/Carpool'
import Uncertainty from './transportation/Uncertainty'
import logoFlockeoMoment from 'data/flockeo/logo-Flockeo-moments.png'

import { useTranslation } from "react-i18next"
import i18n from "i18next"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.375rem;
`

const FlockeoWrapper = styled.div`
  margin-left: auto;
  backgroud-color: red;
`

const FlockeoWrapperButton = styled.button`
  border-radius: 3rem;
  background-color: #2DA57E;
  color: white;
  padding: 0.25rem;
  border: none;
  width: 8rem;
  cursor: pointer;
`

const TitleWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  margin-bottom: 0.125rem;
`
const Title = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  font-size: 0.875rem;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
  }
`
const ChartWrapper = styled.div`
  flex: 1;
  max-width: 30rem;
  padding-right: 1.5rem;
`
const Chart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const EmojiWrapper = styled.div`
  position: relative;
  width: 2rem;
  margin-right: 1rem;
  font-size: 2rem;
  line-height: 0.7;

  ${(props) => props.theme.mq.small} {
    margin-right: 0.75rem;
  }
`
const SecondaryEmoji = styled(Emoji)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 50%);
  font-size: 0.75em;
`
const Bar = styled.div`
  position: relative;
  width: ${(props) => props.percent * 100}%;
  height: 1.75rem;
  transform-origin: left;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
`

const Value = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  display: flex;
  align-items: baseline;
  padding-left: ${(props) => (props.noBar ? 0 : 0.5)}rem;
  line-height: 0.7;
  color: ${(props) => props.theme.colors.second};
  transition: color 200ms ease-out;

  ${(props) => props.theme.mq.medium} {
    left: ${(props) => (props.inside ? 'auto' : '100%')};
    right: ${(props) => (props.inside ? '1rem' : 'auto')};
    color: ${(props) =>
    props.theme.colors[props.inside ? 'background' : 'second']};
  }
`
const Number = styled.span`
  margin-right: 0.6rem;
  font-size: 1.25rem;
  font-weight: 700;

  ${(props) => props.theme.mq.small} {
    font-size: 1rem;
  }
`
const Unit = styled.span`
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`

export default function Transportation(props) {
  const { setSource, setCO2E } = useContext(ModalContext)

  const { t, i18n } = useTranslation()

  const additionalStyle = (props.transportation.type == 'flockeo') ?
    {
      wrapper: {
        backgroundColor: '#EFF4F9', borderRadius: '1rem', padding: '0.5rem'
      },
      emojiWrapper: { marginRight: '1.5rem' },
      title: { color: '#2DA57E' },
      img: { height: '3rem' }
    }
    : {}

  return (
    <Wrapper {...props} style={additionalStyle.wrapper}>
      <EmojiWrapper style={additionalStyle.emojiWrapper}>
        {
          props.transportation.type == 'flockeo' ? (
            <img src={logoFlockeoMoment} style={additionalStyle.img} />
          ) : (
            [
              <Emoji key="1">{props.transportation.emoji.main}</Emoji>,
              <SecondaryEmoji key="2">{props.transportation.emoji.secondary}</SecondaryEmoji>
            ]
          )
        }
      </EmojiWrapper>
      <ChartWrapper>
        <TitleWrapper>
          <Title style={additionalStyle.title}>
            <span onClick={() => setSource(props.transportation.id)}>
              {props.transportation.label[i18n.language]}{' '}
              {props.distance &&
                ` (${props.distance > 10000
                  ? Math.round(props.distance / 1000)
                  : Math.round(props.distance / 100) / 10
                }km)`}
            </span>
            <Carpool transportation={props.transportation} />
            <Uncertainty transportation={props.transportation} />
          </Title>
        </TitleWrapper>
        <Chart>
          <Bar percent={props.transportation.value / props.max}>
            <Value
              noBar={props.transportation.value / props.max === 0}
              inside={props.transportation.value / props.max > 0.7}
            >
              <Number>
                {props.transportation.value > 100000
                  ? Math.round(props.transportation.value / 1000)
                  : props.transportation.value > 10000
                    ? Math.round(props.transportation.value / 100) / 10
                    : props.transportation.value > 100
                      ? Math.round(props.transportation.value / 10) / 100
                      : Math.round(props.transportation.value) / 1000}
              </Number>
              <Unit onClick={() => setCO2E(true)}>
                {' '}
                kgCO
                <sub>2</sub>e
              </Unit>
            </Value>
          </Bar>
        </Chart>
      </ChartWrapper>
      {props.transportation.type == 'flockeo' &&
        <FlockeoWrapper>
          <a href="https://flockeo.com/reserver-atelier-boost" target="_blank"><FlockeoWrapperButton>Découvrir ➜</FlockeoWrapperButton></a>
        </FlockeoWrapper>
      }
    </Wrapper>
  )
}
