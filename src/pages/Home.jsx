import { Fragment } from "react"
import useInfiniteFetchPosts from "../hooks/useInfiniteFetchPosts"

const Test2 = () => {
    const {
        data,
        // isLoading,
        // isError,
        // error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteFetchPosts(20)

    return (
        <div>
            {isFetching && <p>is fetching...</p>}
            {isFetchingNextPage && <p>is fetching next page...</p>}
            {data?.pages.map((group, index) => {
                return (
                    <Fragment key={index}>
                        {group.data.map((post) => {
                            return (
                                <div key={post.id} className="">
                                    <p className="text-lg">{post.id}</p>
                                    <h2>{post.title}</h2>
                                    <p>{post.body}</p>
                                </div>
                            )
                        })}
                    </Fragment>
                )
            })}
            <button disabled={!hasNextPage} onClick={fetchNextPage}>
                Load more...
            </button>
        </div>
    )
}

export default Test2
