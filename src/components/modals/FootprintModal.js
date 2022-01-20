import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'
import SearchContext from 'utils/SearchContext'
import Modal from 'components/base/Modal'
import Button from 'components/base/Button'
import TextInput from 'components/base/TextInput'
import MagicLink from 'components/base/MagicLink'

const Title = styled.h2``
const Text = styled.p``
const StyledTextInput = styled(TextInput)`
  display: inline-block;
  width: 4.5rem;
  margin: 0;
`
export default function SetFootprintModal() {
  const { footprint: open, setFootprint } = useContext(ModalContext)
  const { yearlyFootprint, setYearlyFootprint } = useContext(SearchContext)

  return (
    <Modal open={open} setOpen={setFootprint}>
      <Title>Mon empreinte carbone</Title>
      <Text>
        Si vous connaissez votre empreinte carbonne annuelle, vous pouvez la
        modifier :{' '}
        <StyledTextInput
          type='number'
          value={yearlyFootprint}
          onChange={(e) => setYearlyFootprint(e.value)}
        />{' '}
        tonnes
      </Text>
      <Text>
        Si vous ne la connaissez pas, vous pouvez la calculer simplement grâce à
        notre simulateur{' '}
        <MagicLink to={`https://nosgestesclimat.fr/`}>
          Nos Gestes Climat
        </MagicLink>
      </Text>
      <Text>
        <Button to={`https://nosgestesclimat.fr/`}>
          Calculer mon empreinte carbonne
        </Button>
        <br />
      </Text>
      <Text>
        Aujourd'hui, un·e français·e en émet en moyenne 9,9 tonnes de gaz à
        effet de serre (GES) par an (
        <MagicLink to='https://www.statistiques.developpement-durable.gouv.fr/estimation-de-lempreinte-carbone-de-1995-2019'>
          source
        </MagicLink>
        ).
      </Text>
      <Text>
        La cible à atteindre pour{' '}
        <MagicLink
          to={
            'https://datagir.ademe.fr/blog/budget-empreinte-carbone-c-est-quoi/'
          }
        >
          respecter l'accord de Paris
        </MagicLink>{' '}
        est d'environ 2 tonnes de GES par an et par personne, avec un premier
        palier de réduction de -40% de GES d'ici 2030 (l'Europe parle de -55%).
      </Text>
    </Modal>
  )
}
