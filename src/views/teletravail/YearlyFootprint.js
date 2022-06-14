import React from 'react'
import styled from 'styled-components'
import JsxParser from 'react-jsx-parser'

const Wrapper = styled.div`
`
const Bar = styled.div`
  position: relative;
  height: 7rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.colors.secondLight};
  border-radius: 3.5rem;
`
const Emitted = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => props.percent}%;
  height: 100%;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
  transition: width 300ms ease-out;

  ${(props) => props.theme.mq.small} {
    max-width: ${(props) =>
    props.percent !== 100 ? 'calc(100% - 5rem)' : 'auto'};
    min-width: ${(props) => (props.percent ? '5rem' : 'auto')};
  }
`
const Saved = styled(Emitted)`
  left: auto;
  right: 0;
  transform-origin: right;
  color: ${(props) => props.theme.colors.second};
  background-color: transparent;
`
const Content = styled.p`
  margin: 0;
  padding-top: 2rem;
  text-align: center;
  line-height: 1.4rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity ${(props) => (props.visible ? 300 : 0)}ms
    ${(props) => (props.visible ? 200 : 0)}ms;

  ${(props) => props.theme.mq.small} {
    font-size: 0.875rem;
  }
`
const Small = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity ${(props) => (props.visible ? 300 : 0)}ms
    ${(props) => (props.visible ? 200 : 0)}ms; ;
`
const Number = styled.span`
  font-size: 2em;
  font-weight: bold;
`
const Disclaimer = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  text-align: center;
`
export default function YearlyFootprint(props) {
  const { t } = ri18n.useTranslation()

  return (
    <Wrapper>
      <Bar>
        <Emitted
          percent={(props.emitted / (props.emitted + props.saved)) * 100}
        >
          <Content
            visible={props.emitted}
            small={(props.emitted / (props.emitted + props.saved)) * 100 < 25}
          >
            <Number>{props.emitted}</Number> kgCO2<sub>e</sub>
            <br />
            {t('yearlyFootprint.1')}
            <br />
            <Small
              visible={
                (props.emitted / (props.emitted + props.saved)) * 100 >= 25
              }
            >
              {t('yearlyFootprint.2')} {props.presentiel} {props.presentiel > 1 ? t('yearlyFootprint.4') : t('yearlyFootprint.3')}
            </Small>
          </Content>
        </Emitted>
        <br />
        <Saved percent={(props.saved / (props.emitted + props.saved)) * 100}>
          <Content
            visible={props.saved}
            small={(props.saved / (props.emitted + props.saved)) * 100 < 25}
          >
            <Number>{props.saved}</Number> kgCO2<sub>e</sub>
            <br />
            {props.saved > 1 ? t('yearlyFootprint.6') : t('yearlyFootprint.5')}
            <br />
            <Small
              visible={
                (props.saved / (props.emitted + props.saved)) * 100 >= 25
              }
            >
              {' ' + t('yearlyFootprint.2') + ' '}
              {props.teletravail} {props.teletravail > 1 ? t('yearlyFootprint.4') : t('yearlyFootprint.3')}
            </Small>
          </Content>
        </Saved>
      </Bar>
      <Disclaimer>
        <JsxParser jsx={t('yearlyFootprint.7')} />
      </Disclaimer>
    </Wrapper>
  )
}
