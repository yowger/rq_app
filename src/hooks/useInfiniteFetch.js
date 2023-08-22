import { useInfiniteQuery } from "react-query"

const useInfiniteFetch = (key, queryFunction, options = {}, { limit = 10 }) => {
    return useInfiniteQuery({
        queryKey: [key],
        queryFn: queryFunction,
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
