import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import TransportationContext from 'utils/TransportationContext'
import Checkbox from 'components/base/Checkbox'
import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'
import JsxParser from 'react-jsx-parser'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { radiativeForcing, setRadiativeForcing } = useContext(ModalContext)
  const { uncertainty, setUncertainty } = useContext(TransportationContext)
  const { t } = ri18n.useTranslation()

  return (
    <Modal open={radiativeForcing} setOpen={setRadiativeForcing}>
      <Title>{t('radiativeForcingModal.1')}</Title>
      <Text>
        <JsxParser
          components={{ MagicLink }}
          jsx={t('radiativeForcingModal.2')}
        />
      </Text>
      <Checkbox
        name='trainées'
        checked={uncertainty}
        onChange={(checked) => setUncertainty(checked)}
      >
        {t('radiativeForcingModal.3')}
      </Checkbox>
    </Modal>
  )
}
