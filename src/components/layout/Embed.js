import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import Panel from 'components/base/Panel'
import Themes from './embed/Themes'
import Code from './embed/Code'
import ContactPrompt from 'components/base/ContactPrompt'
import Select from 'components/base/FancySelect'

const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.second};
  font-weight: bold;
  line-height: 1.2;

  ${(props) => props.theme.mq.small} {
    font-size: 1.5rem;
  }
`
export default function Embed(props) {
  const { embedOpen, setEmbedOpen, url, typeShare, setTypeShare } =
    useContext(UXContext)
  const { t } = ri18n.useTranslation()

  return (
    <Panel
      small={props.small}
      open={embedOpen}
      toggleClose={() => {
        setEmbedOpen((prevOpen) => !prevOpen)
      }}
      index={0}
    >
      <Title>
        {t('embed.1') + ' '}
        <Select
          fancy
          value={typeShare}
          onChange={setTypeShare}
          options={[
            { value: 'simulator', label: t('embed.2') },
            { value: 'result', label: t('embed.3') }
          ]}
        />
      </Title>
      <Code id={props.id} url={url} />
      {props.children && (
        <>
          <h3>{t('embed.4')}</h3>
          {props.children}
        </>
      )}
      <Themes />
      <ContactPrompt configurator />
    </Panel>
  )
}
