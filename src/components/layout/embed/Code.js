import React, { useState } from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'

const Wrapper = styled.div`
  margin-bottom: 2em;
`
const Text = styled.code`
  position: relative;
  display: block;
  margin-bottom: 0.5em;
  padding: 1em 0;
  color: ${(props) => props.theme.colors.main};
  word-break: break-word;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  cursor: pointer;

  &:before {
    content: '${(props) => props.onClickText}';
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.875em;
    color: ${(props) => props.theme.colors.main};
    opacity: ${(props) => (props.copied ? 1 : 0)};
    transition: opacity 300ms ease-out;
  }
`
const Explication = styled.p`
  margin-bottom: 0;
  font-size: 0.875em;
  font-style: italic;
`
export default function Code(props) {
  const [copied, setCopied] = useState(false)
  const script = '<iframe src="' + window.location.protocol + "//" + window.location.hostname + window.location.pathname + (props.url ? props.url : '') + '" style="border: medium none; width: 100%; display: block; margin: 0px auto; overflow: hidden; height: 982px;" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" />'
  const { t } = ri18n.useTranslation()

  return (
    <Wrapper>
      <Text
        copied={copied}
        onClickText={t('code.2')}
        onClick={() => {
          if (copy(script)) {
            setCopied(true)
          }
        }}
      >
        {script}
      </Text>
      <Explication>
        {t('code.1')}
      </Explication>
    </Wrapper>
  )
}
