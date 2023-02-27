import { useTranslation } from 'react-i18next'
import { NewsList } from '../../containers/NewsList'

export const HomePage = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="container">
                <h4 className="main-title">{t('news')}</h4>
                <NewsList />
            </div>
        </>
    )
}
