import { useQueryClient } from "react-query"
import axiosPublic from "../api/axios"
import useInfiniteFetch from "./useInfiniteFetch"

const fetchPosts = async (page = 0, limit = 10, userId) => {
    const response = await axiosPublic({
        url: `/posts?_expand=user&_page=${
            page + 1
        }&_limit=${limit}&userId=${userId}`,
    })

    const { data, headers } = response

    const totalCount = parseInt(headers["x-total-count"]) || 0

    return { data, totalCount }
}

const useFetchPostsByUser = (limit, userId) => {
    const queryClient = useQueryClient()

    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteFetch({
        queryKey: ["postByProfile", userId],
        queryFn: ({ pageParam: page = 0 }) => fetchPosts(page, limit, userId),
        options: {
            initialData: () => {
                const post = queryClient.getQueryData(["postByProfile", userId])

                return post || undefined
            },
        },
        variables: { limit },
    })

    return {
        data: data?.pages.flatMap(({ data }) => data) || [],
        isLoading,
        isError,
        error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    }
}

export default useFetchPostsByUser
