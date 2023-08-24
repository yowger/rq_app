import axios from "axios"

const configureBaseUrl = () => {
    let BASE_URL

    if (import.meta.env.VITE_APP_ENV === "development") {
        BASE_URL = "http://jsonplaceholder.typicode.com"
    } else {
        BASE_URL = ""
    }

    return BASE_URL
}

const axiosPublic = axios.create({
    baseURL: configureBaseUrl(),
})

// if (import.meta.env.VITE_APP_ENV === "development") {
    axiosPublic.interceptors.request.use((config) => {
        const { baseURL, url } = config
        const requestUrl = baseURL + url

        console.warn(requestUrl)

        return config
    })
// }

export default axiosPublic
