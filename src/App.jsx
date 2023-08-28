import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BaseLayout from "./components/layout/BaseLayout"
import Profile from "./pages/Profile"
import Post from "./pages/Post"
import Photos from "./pages/Photos"
import ProfileLayout from "./components/layout/ProfileLayout"

const App = () => {
    return (
        <Routes>
            <Route element={<BaseLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<Post />} />

                <Route element={<ProfileLayout />}>
                    <Route path="/profile/:profileId" element={<Profile />} />
                    <Route
                        path="profile/:profileId/photos/:photoId"
                        element={<Photos />}
                    />
                </Route>
                <Route path="*" element={<p>Page not found</p>} />
            </Route>
        </Routes>
    )
}

export default App
