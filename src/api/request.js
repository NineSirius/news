import ky from 'ky'
import { json } from 'react-router-dom'

const firebaseApi = ky.create({ prefixUrl: import.meta.env.VITE_FIREBASE_API })

export const setPosts = (data) => {
    firebaseApi.post('posts.json', { json: data })
}
