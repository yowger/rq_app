import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container max-w-screen-md mx-auto px-5">
            <div className="mb-6 h-10 flex items-center">
                <Link to="/">Home</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout
