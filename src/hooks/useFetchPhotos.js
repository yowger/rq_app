import { useQuery, useQueryClient } from "react-query"
import axiosPublic from "../api/axios"

const fetchPhotos = async (albumId, page = 1, limit = 8) => {
    const response = await axiosPublic({
        url: `/photos?albumId=${albumId}&_page=${page}&_limit=${limit}`,
    })

    const { data: photos, headers } = response

    const totalCount = parseInt(headers["x-total-count"]) || 0
    const totalPages = Math.ceil(totalCount / limit)

    return { photos, totalCount, totalPages }
}

const useFetchPhotos = (albumId, page) => {
    const queryClient = useQueryClient()

    const { data, isLoading, isError, error, isFetching, isPreviousData } =
        useQuery({
            queryKey: ["photos", albumId, page],
            queryFn: () => fetchPhotos(albumId, page),
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            initialData: () => {
                const profileData = queryClient.getQueryData([
                    "photos",
                    albumId,
                ])

                return profileData || undefined
            },
        })

    return { data, isLoading, isError, error, isFetching, isPreviousData }
}

export default useFetchPhotos
export { fetchPhotos }
