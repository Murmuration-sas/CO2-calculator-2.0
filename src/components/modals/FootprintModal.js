import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import SearchContext from 'utils/SearchContext'
import Modal from 'components/base/Modal'
import Button from 'components/base/Button'
import TextInput from 'components/base/TextInput'
import MagicLink from 'components/base/MagicLink'
import JsxParser from 'react-jsx-parser'

const Title = styled.h2``
const Text = styled.p``
const StyledTextInput = styled(TextInput)`
  display: inline-block;
  width: 4.5rem;
  margin: 0;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default function SetFootprintModal() {
  const { footprint: open, setFootprint: setOpen } = useContext(ModalContext)
  const { yearlyFootprint, setYearlyFootprint } = useContext(SearchContext)
  const { t } = ri18n.useTranslation()

  const [pristine, setPristine] = useState(true)
  useEffect(() => {
    setPristine(true)
  }, [open])

  return (
    <Modal open={open} setOpen={setOpen}>
      <Title>{t('footprintModal.1')}</Title>
      <Text>
        <JsxParser
          components={{ MagicLink }}
          jsx={t('footprintModal.2')}
        />
      </Text>
      <Text>
        <JsxParser
          components={{ MagicLink }}
          jsx={t('footprintModal.3')}
        />
      </Text>
      <Text>
        {t('footprintModal.4') + ' '}
        <label htmlFor='empreinte'>{t('footprintModal.5')}</label>,
        {' ' + t('footprintModal.6') + ' '}
        <StyledTextInput
          name='empreinte'
          type='number'
          value={yearlyFootprint}
          onChange={(e) => {
            setYearlyFootprint(e.value)
            setPristine(false)
          }}
        />{' '}
        {t('footprintModal.7')}
      </Text>
      <Text>
        <JsxParser
          components={{ MagicLink }}
          jsx={t('footprintModal.8')}
        />
      </Text>
      {!pristine && (
        <ButtonWrapper>
          <Button onClick={() => setOpen(false)}>{t('footprintModal.9')}</Button>
        </ButtonWrapper>
      )}
    </Modal>
  )
}
