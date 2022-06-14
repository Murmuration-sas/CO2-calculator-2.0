import React from 'react'
import styled from 'styled-components'

import useIframe from 'hooks/useIframe'
import JsxParser from 'react-jsx-parser'

const Wrapper = styled.div`
  margin-top: 3rem;
  font-size: ${(props) => (props.iframe ? 0.75 : 1)}rem;
  font-weight: 300;
  text-align: center;
`
export default function Disclaimer(props) {
  const iframe = useIframe()
  const { t } = ri18n.useTranslation()

  return (
    <Wrapper iframe={iframe}>
      {props.itinerary && (
        <p>
          {t('disclaimer.1')}
        </p>
      )}
      <p>
        <JsxParser jsx={t('disclaimer.2')} />
      </p>
    </Wrapper>
  )
}
