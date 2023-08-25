import { useQuery, useQueryClient } from "react-query"
import axiosPublic from "../api/axios"

const fetchAlbums = async (props) => {
    const { queryKey } = props
    const id = queryKey[1]

    const response = await axiosPublic({
        url: `/albums/?userId=${id}&_limit=8`,
    })

    return response.data
}

const useFetchAlbums = (id) => {
    const queryClient = useQueryClient()

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["albums", id],
        queryFn: fetchAlbums,
        refetchOnWindowFocus: false,
        initialData: () => {
            const profileData = queryClient.getQueryData(["albums", id])

            return profileData || undefined
        },
    })

    return { data, isLoading, isError, error, isFetching }
}

export default useFetchAlbums
