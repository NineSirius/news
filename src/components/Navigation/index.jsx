import { useTranslation } from 'react-i18next'
import { FaHome, FaNewspaper } from 'react-icons/fa'
import { ChangeLang } from '../ChangeLang'
import { CustomLink } from './CustomLink'
import styles from './Navigation.module.css'

export const Navigation = () => {
    const { t } = useTranslation()

    return (
        <header className={styles.header}>
            <div>Logo</div>
            <nav className={styles.nav}>
                <CustomLink to="/" icon={<FaHome />}>
                    {t('home_page')}
                </CustomLink>
                <CustomLink to="/add-post" icon={<FaNewspaper />}>
                    {t('add_post')}
                </CustomLink>
                <ChangeLang />
            </nav>
        </header>
    )
}
