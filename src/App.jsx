import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'

import './App.css'
import { Layout } from './containers/Layout'
import { ItemPage } from './containers/ItemPage'
import { AddPostForm } from './containers/AddPostForm'


function App() {


    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/">
                        <Route index element={<HomePage />} />
                        <Route path="posts/:id" element={<ItemPage />} />
                    </Route>
                    <Route path="/add-post" element={<AddPostForm />} />
                </Routes>
            </Layout>
        </>
    )
}

export default App
