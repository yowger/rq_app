import { useRef } from "react"
import { useIntersection } from "@mantine/hooks"
import useFetchPosts from "../hooks/useFetchPosts"
import Post from "../components/Post"
import SkeletonPost from "../components/SkeletonPost"

// scrapped, the problem with this is there are times when it makes multiple request especially if the network is slow, i could have made adjustment to prevent it but I decided to go with <InfiniteScroll> for readability and simplicity, on top of its features like improve performance but only rendering visible parts

//I save this here cause it might come in handy in the future
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

    const lastPostRef = useRef(null)

    const { ref, entry } = useIntersection({
        root: lastPostRef.current,
        threshold: 1,
    })

    // console.log({
    //     isLoading,
    //     isFetching,
    //     isFetchingNextPage,
    //     hasNextPage,
    //     isError,
    //     error,
    // })

    if (
        entry?.isIntersecting &&
        !isLoading &&
        !isFetching &&
        !isFetchingNextPage &&
        hasNextPage
    ) {
        console.log("fetching")
        fetchNextPage()
    }

    return (
        <main>
            {postData?.map((post, index) => {
                const shouldTriggerNextPageFetch =
                    (index + 4) % 10 === 0 && hasNextPage

                return (
                    <Post
                        key={post.id}
                        {...post}
                        ref={shouldTriggerNextPageFetch ? ref : null}
                    />
                )
            })}

            {isFetching &&
                Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonPost key={index} />
                ))}

            {!hasNextPage && <p>no more post to show</p>}
        </main>
    )
}

export default Home
