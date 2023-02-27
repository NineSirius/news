import i18n from '../../i18n'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useEffect } from 'react'

export const ChangeLang = () => {
    const [language, setLanguage] = useLocalStorage('language', 'ru')

    const handleLangChange = (e) => {
        if (e.target.value === 'en') {
            i18n.changeLanguage('en')
            setLanguage('en')
        } else if (e.target.value === 'ru') {
            i18n.changeLanguage('ru')
            setLanguage('ru')
        }
    }

    useEffect(() => {
        if (language === 'en') {
            i18n.changeLanguage('en')
            setLanguage('en')
        } else if (language === 'ru') {
            i18n.changeLanguage('ru')
            setLanguage('ru')
        }
    }, [])

    return (
        <select onChange={handleLangChange}>
            <option value="ru" name="ru" selected={language === 'ru'}>
                Русский
            </option>
            <option value="en" name="en" selected={language === 'en'}>
                English
            </option>
        </select>
    )
}
