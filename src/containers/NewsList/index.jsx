import { useEffect, useState } from 'react'
import { NewsCard } from '../../components/NewsCard'

import { getPosts } from '../../api/request'

import styles from './NewsList.module.css'

export const NewsList = () => {
    useEffect(() => {
        getPosts().then((data) => {
            setNewsList(
                Object.keys(data).map((key) => {
                    return {
                        ...data[key],
                        id: key,
                    }
                }),
            )
        })
    }, [])

    const [newsList, setNewsList] = useState([])

    return (
        <>
            <div className={styles.news}>
                {newsList.map((newsItem) => {
                    return (
                        <NewsCard
                            key={newsItem.id}
                            title={newsItem.title}
                            desc={newsItem.shortDesc}
                            time={newsItem.time}
                            prevImage={newsItem.prevImg}
                            views={newsItem.views || 0}
                            id={newsItem.id}
                        />
                    )
                })}
            </div>
        </>
    )
}
