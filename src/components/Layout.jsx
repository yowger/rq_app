import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container max-w-screen-md mx-auto px-5">
            <Outlet />
        </div>
    )
}

export default Layout
