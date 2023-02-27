import ky from 'ky'
import { json } from 'react-router-dom'

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API })

export const setPosts = (data) => {
    return firebaseApi.post('posts.json', { json: data })
}

export const getPosts = () => {
    return firebaseApi.get('posts.json').json()
}

export const getPostItem = (id) => {
    return firebaseApi.get(`posts/${id}.json`).json()
}
