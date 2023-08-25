import { useQuery, useQueryClient } from "react-query"
import axiosPublic from "../api/axios"

const fetchPostWithComment = async (props) => {
    const { queryKey } = props
    const id = queryKey[1]

    const response = await axiosPublic({
        url: `/posts/${id}?_expand=user&_embed=comments`,
    })

    return response.data
}

const useFetchPost = (id) => {
    const queryClient = useQueryClient()

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["post", id],
        queryFn: fetchPostWithComment,
        refetchOnWindowFocus: false,
        initialData: () => {
            const post = queryClient
                .getQueryData("post")
                ?.pages.flatMap((page) => page.data)
                .filter((post) => post.id.toString() === id)[0]

            return post || undefined
        },
    })

    return { data, isLoading, isError, error, isFetching }
}

export default useFetchPost
