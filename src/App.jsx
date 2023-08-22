import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<p>Page not found</p>} />
            </Route>
        </Routes>
    )
}

export default App
