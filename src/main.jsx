import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>

            {import.meta.env.VITE_APP_ENV === "development" && (
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            )}
        </QueryClientProvider>
    </React.StrictMode>
)
