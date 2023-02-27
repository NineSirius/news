import { useTranslation } from 'react-i18next'

import { ChangeLang } from '../../components/ChangeLang'
import { Navigation } from '../../components/Navigation'

export const Layout = ({ children }) => {
    const { t } = useTranslation()

    return (
        <>
            <Navigation />

            <main>{children}</main>
        </>
    )
}
