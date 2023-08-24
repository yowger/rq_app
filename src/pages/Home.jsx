import { useNavigate } from "react-router-dom"
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
    console.log({ postData })

    // console.log({
    //     isLoading,
    //     isFetching,
    //     isFetchingNextPage,
    //     hasNextPage,
    //     isError,
    //     error,
    // })
    const navigate = useNavigate()

    const onClickPost = (id) => {
        navigate(`/post/${id}`)
    }

    const SkeletonLoader = Array.from({ length: 4 }).map((_, index) => (
        <SkeletonPost key={index} />
    ))

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
                    return (
                        <Post onClick={onClickPost} key={post.id} {...post} />
                    )
                })}
            </InfiniteScroll>
        </main>
    )
}

export default Home
