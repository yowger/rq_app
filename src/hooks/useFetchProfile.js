import { useQuery, useQueryClient } from "react-query"
import axiosPublic from "../api/axios"

const fetchProfileWithPost = async (props) => {
    const { queryKey } = props
    const id = queryKey[1]

    const response = await axiosPublic({
        url: `/users/${id}`,
    })

    return response.data
}

const useFetchProfile = (id) => {
    const queryClient = useQueryClient()

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["profile", id],
        queryFn: fetchProfileWithPost,
        refetchOnWindowFocus: false,
        initialData: () => {
            const profileData = queryClient.getQueryData(["profile", id])

            return profileData || undefined
        },
    })

    return { data, isLoading, isError, error, isFetching }
}

export default useFetchProfile
