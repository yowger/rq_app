import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container max-w-screen-md mx-auto px-5 pb-5">
            <nav className="mb-6 h-10 flex items-center">
                <Link to="/">Home</Link>
            </nav>

            <Outlet />

            <footer className="mt-10 justify-center flex items-center flex-col">
                <p className="text-sm text-gray-600 mb-1">
                    {"Copyright © "}
                    Roger Pantil {new Date().getFullYear()}
                    {"."}
                </p>
                <div className="flex gap-2">
                    <Link
                        to="https://github.com/yowger"
                        target="_blank"
                        className="text-sm text-gray-600 hover:cursor-pointer hover:underline"
                    >
                        Github
                    </Link>
                    <Link
                        to="https://github.com/yowger/rq_app"
                        target="_blank"
                        className="text-sm text-gray-600 hover:underline hover:cursor-pointer "
                    >
                        Code
                    </Link>
                </div>
            </footer>
        </div>
    )
}
/*
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            Roger Pantil {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}
*/

export default Layout
