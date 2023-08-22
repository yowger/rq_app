import { useRef } from "react"
import useFetchPosts from "../hooks/useFetchPosts"
import { useIntersection } from "@mantine/hooks"
import Post from "../components/Post"

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
    console.log({
        isLoading,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        isError,
        error,
    })

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
                const shouldUseRef = (index + 4) % 10 === 0 && hasNextPage

                return (
                    <Post
                        key={post.id}
                        {...post}
                        ref={shouldUseRef ? ref : null}
                    />
                )
            })}

            {isFetching && <p>is fetching...</p>}
            {isFetchingNextPage && <p>is fetching next page...</p>}
        </main>
    )
}

export default Home
