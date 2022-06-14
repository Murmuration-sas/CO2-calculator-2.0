import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'

const Title = styled.h2``
const Text = styled.p``
export default function Occupancy() {
  const { occupancy: open, setOccupancy: setOpen } = useContext(ModalContext)
  const { t } = ri18n.useTranslation()

  return (
    <Modal open={open} setOpen={setOpen}>
      <Title>{t('occupancyModal.1')}</Title>
      <Text>
        {t('occupancyModal.2')}
      </Text>
      <Text>
        {t('occupancyModal.3') + ' '}
        <MagicLink to='https://bilans-ges.ademe.fr/documentation/UPLOAD_DOC_FR/index.htm?transport_de_personnes.htm'>
          {t('occupancyModal.4')}
        </MagicLink>
        {t('occupancyModal.5')}
      </Text>
    </Modal>
  )
}
