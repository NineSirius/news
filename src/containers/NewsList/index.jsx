import { useState } from 'react'
import { NewsCard } from '../../components/NewsCard'

import styles from './NewsList.module.css'

export const NewsList = () => {
    const [newsList, setNewsList] = useState([
        {
            title: 'This red card it`s Ferrari :D',
            shortDesc: 'I don`t know what can say about this car',
            views: 0,
            prevImage:
                'https://cdn.ferrari.com/cms/network/media/img/resize/5d26fdb7c3f9ec0af6475619-01_fb_ppl_intro_lp3lhwq8?width=1080',
            time: '27.02.2023',
        },
    ])

    return (
        <>
            <div className={styles.news}>
                {newsList.map((newsItem) => {
                    return (
                        <NewsCard
                            title={newsItem.title}
                            desc={newsItem.shortDesc}
                            prevImage={newsItem.prevImage}
                            views={newsItem.views}
                            time={newsItem.time}
                        />
                    )
                })}
            </div>
        </>
    )
}
