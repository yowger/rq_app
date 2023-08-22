import { useRef } from "react"
import { useIntersection } from "@mantine/hooks"
import useFetchPosts from "../hooks/useFetchPosts"
import Post from "../components/Post"
import SkeletonPost from "../components/SkeletonPost"
import InfiniteScroll from "react-infinite-scroll-component"

const Home = () => {
    const {
        data: postData,
        isLoading,
        isError,
        error,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useFetchPosts(10)

    console.log({
        isLoading,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        isError,
        error,
    })

    return (
        <main>
            <InfiniteScroll
                dataLength={postData ? postData.length : 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage}
                loader={Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonPost key={index} />
                ))}
                endMessage={
                    hasNextPage === false && <p>no more post to show</p>
                }
            >
                {postData?.map((post) => {
                    return <Post key={post.id} {...post} />
                })}
            </InfiniteScroll>
        </main>
    )
}

export default Home
