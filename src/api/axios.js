import axios from "axios"

const BASE_URL = "http://jsonplaceholder.typicode.com"

const axiosPublic = axios.create({
    baseURL: BASE_URL,
})

if (import.meta.env.VITE_APP_ENV === "development") {
    axiosPublic.interceptors.request.use((config) => {
        const { baseURL, url } = config
        const requestUrl = baseURL + url

        console.warn(requestUrl)

        return config
    })
}

export default axiosPublic
