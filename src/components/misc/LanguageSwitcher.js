import React from 'react'
import i18next from "_i18next"
import styled from 'styled-components'

const Select = styled.select`
    background-color: #eff4f9;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    border-color: transparent;
    color: #DE0244;
    outline: transparent;
`

export default function LanguageSwitcher() {

    return (
        <Select onChange={(e) => i18next.changeLanguage(e.target.value)}>
            <option value="fr" selected={i18next.language == 'fr'} >FR</option>
            <option value="en" selected={i18next.language == 'en'} >EN</option>
        </Select>
    )
}
