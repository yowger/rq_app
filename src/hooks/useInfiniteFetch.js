import { useInfiniteQuery } from "react-query"

const useInfiniteFetch = (props) => {
    const {
        queryKey,
        queryFn,
        options,
        variables: { limit = 10 },
    } = props

    return useInfiniteQuery({
        queryKey: queryKey,
        queryFn: queryFn,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, pages) => {
            if (Math.ceil(lastPage.totalCount / limit) > pages.length) {
                return pages.length
            } else {
                return undefined
            }
        },
        ...options,
    })
}

export default useInfiniteFetch
