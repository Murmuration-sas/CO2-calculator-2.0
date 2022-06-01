import React, { useContext } from 'react'
import i18next from "_i18next"

export default function LanguageSwitcher() {

    function onChangeHandler(event) {
        console.log('*', i18next, event, event.target.value)

        i18next.changeLanguage(event.target.value)
    }

    return (
        <select onChange={onChangeHandler}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
        </select>
    )
}
