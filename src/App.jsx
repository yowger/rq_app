import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<p>Page not found</p>} />
        </Routes>
    )
}

export default App
