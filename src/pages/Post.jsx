import { useParams } from "react-router-dom"
import { useQuery, useQueryClient } from "react-query"
import PostComponent from "../components/Post"
import axiosPublic from "../api/axios"
import SkeletonPost from "../components/SkeletonPost"

const fetchPost = async (props) => {
    const { queryKey } = props
    const id = queryKey[1]

    const response = await axiosPublic({
        url: `/posts/${id}?_expand=user`,
    })

    return response.data
}

const Post = () => {
    const { id } = useParams()
    const queryClient = useQueryClient()

    const result = useQuery({
        queryKey: ["post", id],
        queryFn: fetchPost,
        refetchOnWindowFocus: false,
        initialData: () => {
            const post = queryClient
                .getQueryData("post")
                ?.pages.flatMap((page) => page.data)
                .filter((post) => post.id.toString() === id)[0]

            return post || undefined
        },
    })
    const {
        data: postData,
        isLoading: postIsLoading,
        isError: postIsError,
        error: postError,
        isFetching: postIsFetching,
    } = result

    console.log({ result })
    console.log({ postData })

    return (
        <div>
            {postIsLoading ? <SkeletonPost /> : <PostComponent {...postData} />}
        </div>
    )
}

export default Post
