import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'
import Button from 'components/base/Button'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { CO2E, setCO2E } = useContext(ModalContext)
  const { t } = ri18n.useTranslation()

  return (
    <Modal open={CO2E} setOpen={setCO2E}>
      <Title dangerouslySetInnerHTML={{ __html: t('CO2EModal.1') }}></Title>
      <Text dangerouslySetInnerHTML={{ __html: t('CO2EModal.2') }}></Text>
      <Text dangerouslySetInnerHTML={{ __html: t('CO2EModal.3') }}></Text>
      <Text>
        {t('CO2EModal.4') + ' '}
        <MagicLink to={`https://monconvertisseurco2.fr`}>
          {t('CO2EModal.5')}
        </MagicLink>
      </Text>
      <Button to={`https://monconvertisseurco2.fr`}>
        {t('CO2EModal.6')}
      </Button>
    </Modal>
  )
}
