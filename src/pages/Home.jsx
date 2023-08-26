import useFetchPosts from "../hooks/useFetchPosts"
import Post from "../components/Post"
import SkeletonPost from "../components/loaders/SkeletonPost"
import InfiniteScroll from "react-infinite-scroll-component"

const SkeletonLoader = Array.from({ length: 5 }).map((_, index) => (
    <SkeletonPost key={index} />
))

// searching with prefetch?
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

    // console.log({
    //     isLoading,
    //     isFetching,
    //     isFetchingNextPage,
    //     hasNextPage,
    //     isError,
    //     error,
    // })

    const endMessage = hasNextPage === false && <p>no more post to show</p>

    return (
        <main>
            <InfiniteScroll
                dataLength={postData ? postData.length : 0}
                next={fetchNextPage}
                hasMore={hasNextPage}
                loader={SkeletonLoader}
                endMessage={endMessage}
            >
                {postData?.map((post) => {
                    return <Post key={post.id} {...post} />
                })}
            </InfiniteScroll>
        </main>
    )
}

export default Home
