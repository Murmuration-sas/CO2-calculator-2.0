import React, { useEffect, useContext, useRef } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'

import Emoji from 'components/base/Emoji'
import MagicLink from 'components/base/MagicLink'
import Visible from './transportation/Visible'
import Lock from './transportation/Lock'

const Wrapper = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(${(props) => props.theme.colors.quad}, 0.1);
  }
`
const Column = styled.td`
  position: relative;
  padding: 1rem 1rem;
`
const Label = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: pointer;

  &:after {
    content: 'ˇ';
    position: relative;
    top: 0.35em;
    margin-left: 0.3em;
    font-size: 1.5em;
    line-height: 0;
  }
`
const Details = styled.div`
  padding: 0.5rem 0 0.5rem 2.75rem;
`
const Description = styled.div`
  color: ${(props) => props.theme.colors.text};
`
const Source = styled(MagicLink)``
const CheckboxWrapper = styled.td`
  text-align: center;
  width: 3rem;
  padding-right: 0.5rem;
`
const EmojiWrapper = styled.div`
  position: relative;
  width: 1.5em;
  margin-right: 0.5em;
  font-size: 1.5em;
  line-height: 0.7;
`
const SecondaryEmoji = styled(Emoji)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 50%);
  font-size: 0.75em;
`
export default function Transportation(props) {
  const { configuratorOpen, setConfiguratorOpen } = useContext(UXContext)

  const ref = useRef(null)
  useEffect(() => {
    if (configuratorOpen === props.transportation.id) {
      console.log(props.transportation.id)
      ref.current.scrollIntoView()
    }
  }, [configuratorOpen, props.transportation])
  return (
    <Wrapper id={props.id} ref={ref}>
      <Column>
        <Label
          active={props.transportation.id === configuratorOpen}
          disabled={!props.transportation.values}
          onClick={() =>
            setConfiguratorOpen(
              configuratorOpen === props.transportation.id
                ? true
                : props.transportation.id
            )
          }
        >
          <EmojiWrapper>
            <Emoji>{props.transportation.emoji.main}</Emoji>
            <SecondaryEmoji>
              {props.transportation.emoji.secondary}
            </SecondaryEmoji>
          </EmojiWrapper>
          {props.transportation.label.fr}
        </Label>
        <Details hidden={props.transportation.id !== configuratorOpen}>
          <Description
            dangerouslySetInnerHTML={{
              __html: props.transportation.description.fr,
            }}
          />
          {props.transportation.source && (
            <Source to={props.transportation.source}>Source</Source>
          )}
        </Details>
      </Column>
      <CheckboxWrapper>
        {props.transportation.values && (
          <Visible
            checked={props.transportationsVisibles.includes(
              String(props.transportation.id)
            )}
            onClick={() => props.toggleVisible(props.transportation.id)}
            small
          />
        )}
      </CheckboxWrapper>
      <CheckboxWrapper>
        {props.transportation.values && (
          <Lock
            checked={props.transportationsAlwaysVisibles.includes(
              String(props.transportation.id)
            )}
            onClick={() => props.toggleAlwaysVisible(props.transportation.id)}
            small
          />
        )}
      </CheckboxWrapper>
    </Wrapper>
  )
}
