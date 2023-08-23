import axiosPublic from "../api/axios"
import useInfiniteFetch from "./useInfiniteFetch"

const fetchPosts = async (page = 0, limit = 10) => {
    const response = await axiosPublic({
        url: `/posts?_expand=user&_page=${page + 1}&_limit=${limit}`,
    })

    const { data, headers } = response

    const totalCount = parseInt(headers["x-total-count"]) || 0

    return { data, totalCount }
}

const useFetchPosts = (limit) => {
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
        queryKey: "post",
        queryFn: ({ pageParam: page = 0 }) => fetchPosts(page, limit),
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

export default useFetchPosts
