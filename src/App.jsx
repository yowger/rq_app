import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/layout/Layout"
import Profile from "./pages/Profile"
import Post from "./pages/Post"
import Photos from "./pages/Photos"

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/photos/:id" element={<Photos />} />
                <Route path="*" element={<p>Page not found</p>} />
            </Route>
        </Routes>
    )
}

export default App
