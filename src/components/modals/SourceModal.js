import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import TransportationContext from 'utils/TransportationContext'

import Modal from 'components/base/Modal'
import MagicLink from 'components/base/MagicLink'

const Title = styled.h2``
const Text = styled.p``
export default function SourceModal() {
  const { source, setSource } = useContext(ModalContext)
  const { transportations, itineraryTransportations } = useContext(
    TransportationContext
  )

  const [curTransportation, setCurTransportation] = useState(null)
  const { t, i18n } = ri18n.useTranslation()

  useEffect(() => {
    const everyTransportations = [
      ...transportations,
      ...itineraryTransportations,
    ]
    setCurTransportation(
      everyTransportations.find(
        (transportation) => transportation.id === source
      )
    )
  }, [source, transportations, itineraryTransportations])

  return (
    <Modal open={source} setOpen={setSource}>
      {curTransportation && (
        <>
          <Title>{curTransportation.label[i18n.language]}</Title>
          <Text
            dangerouslySetInnerHTML={{
              __html: curTransportation.description[i18n.language],
            }}
          />
          {curTransportation.source && <MagicLink to={curTransportation.source}>Source</MagicLink>}
        </>
      )}
    </Modal>
  )
}
