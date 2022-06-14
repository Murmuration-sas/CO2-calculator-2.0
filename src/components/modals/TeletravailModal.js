import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import SearchContext from 'utils/SearchContext'
import Modal from 'components/base/Modal'
import FancySelect from 'components/base/FancySelect'
import Button from 'components/base/Button'
import MagicLink from 'components/base/MagicLink'
import JsxParser from 'react-jsx-parser'

const Title = styled.h2``
const Text = styled.p``
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default function TeletravailModal() {
  const { teletravail: open, setTeletravail: setOpen } =
    useContext(ModalContext)
  const { days, setDays, holidays, setHolidays, extraKm, setExtraKm } =
    useContext(SearchContext)
  const [pristine, setPristine] = useState(true)
  useEffect(() => {
    setPristine(true)
  }, [open])
  const { t } = ri18n.useTranslation()

  return (
    <Modal open={open} setOpen={setOpen}>
      <Title>{t('teletravailModal.1')}</Title>
      <Text>
        {t('teletravailModal.2') + ' '}
        <FancySelect
          value={days}
          onChange={(value) => {
            setDays(value)
            setPristine(false)
          }}
          options={[
            { value: '1', label: `1 ${t('teletravailModal.3')}` },
            { value: '2', label: `2 ${t('teletravailModal.4')}` },
            { value: '3', label: `3 ${t('teletravailModal.4')}` },
            { value: '4', label: `4 ${t('teletravailModal.4')}` },
            { value: '5', label: `5 ${t('teletravailModal.4')}` },
            { value: '6', label: `6 ${t('teletravailModal.4')}` },
            { value: '7', label: `7 ${t('teletravailModal.4')}` }
          ]}
        />{' '}
        {(days > 1) ? t('teletravailModal.6') : t('teletravailModal.5')} {t('teletravailModal.7') + ' '}
        <FancySelect
          value={holidays}
          onChange={(value) => {
            setHolidays(value)
            setPristine(false)
          }}
          options={[
            { value: '1', label: `1 ${t('teletravailModal.8')}` },
            { value: '2', label: `2 ${t('teletravailModal.9')}` },
            { value: '3', label: `3 ${t('teletravailModal.9')}` },
            { value: '4', label: `4 ${t('teletravailModal.9')}` },
            { value: '5', label: `5 ${t('teletravailModal.9')}` },
            { value: '6', label: `6 ${t('teletravailModal.9')}` },
            { value: '7', label: `7 ${t('teletravailModal.9')}` },
            { value: '8', label: `8 ${t('teletravailModal.9')}` },
            { value: '9', label: `9 ${t('teletravailModal.9')}` },
            { value: '10', label: `10 ${t('teletravailModal.9')}` },
            { value: '11', label: `11 ${t('teletravailModal.9')}` },
            { value: '12', label: `12 ${t('teletravailModal.9')}` },
            { value: '13', label: `13 ${t('teletravailModal.9')}` },
          ]}
        />{' '}
        {t('teletravailModal.10')}
      </Text>
      <Text>
        {t('teletravailModal.11') + ' '}
        <FancySelect
          value={extraKm}
          onChange={(value) => {
            setExtraKm(value)
            setPristine(false)
          }}
          options={[
            { value: '0.0', label: `0%` },
            { value: '0.10', label: `10%` },
            { value: '0.15', label: `15%` },
            { value: '0.20', label: `20%` },
            { value: '0.25', label: `25% (${t('teletravailModal.12')})` },
            { value: '0.30', label: `30%` },
            { value: '0.35', label: `35%` },
            { value: '0.40', label: `40%` },
            { value: '0.45', label: `45%` },
            { value: '0.50', label: `50%` },
          ]}
        />{' '}
        <JsxParser
          components={{ MagicLink }}
          jsx={t('teletravailModal.13')}
        />
      </Text>
      <Text>
        <JsxParser
          components={{ MagicLink }}
          jsx={t('teletravailModal.14')}
        />
      </Text>
      {!pristine && (
        <ButtonWrapper>
          <Button onClick={() => setOpen(false)}>{t('teletravailModal.15')}</Button>
        </ButtonWrapper>
      )}
    </Modal>
  )
}
