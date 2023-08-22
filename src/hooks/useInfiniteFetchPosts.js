// import { useInfiniteQuery } from "react-query"
import axiosPublic from "../api/axios"
import useInfiniteFetch from "./useInfiniteFetch"

const fetchPosts = async (page = 0, limit = 10) => {
    console.log({ page, limit })
    const response = await axiosPublic({
        url: `/posts?_page=${page + 1}&_limit=${limit}`,
    })

    const { data, headers } = response

    const totalCount = parseInt(headers["x-total-count"]) || 0

    return { data, totalCount }
}

const useInfiniteFetchPosts = (limit = 10) => {
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteFetch(
        "post",
        ({ pageParam: page = 0 }) => fetchPosts(page, limit),
        {},
        { limit: 10 }
    )

    return {
        data,
        isLoading,
        isError,
        error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    }
}

export default useInfiniteFetchPosts
