import { useParams } from "react-router-dom"
import useFetchPost from "../hooks/useFetchPost"
import Comment from "../components/Comment"
import PostComponent from "../components/Post"
import SkeletonComment from "../components/loaders/SkeletonComment"
import SkeletonPost from "../components/loaders/SkeletonPost"

const SkeletonsComment = () =>
    Array.from({ length: 5 }).map((_, index) => <SkeletonComment key={index} />)

const Post = () => {
    const { postId } = useParams()

    const { data: postData } = useFetchPost(postId)

    return (
        <div className="bg-white">
            {postData ? (
                <PostComponent
                    {...postData}
                    shouldLinkToPost={false}
                    className="border-0"
                />
            ) : (
                <SkeletonPost className="border-0" />
            )}

            <section className="px-4">
                <div className="">
                    {postData?.comments && (
                        <p className="border-b py-2">
                            {postData.comments.length} comments
                        </p>
                    )}
                </div>

                {postData?.comments ? (
                    postData.comments.map((comment) => {
                        return (
                            <Comment
                                key={comment.id}
                                {...comment}
                                className="border-b px-0"
                            />
                        )
                    })
                ) : (
                    <SkeletonsComment />
                )}
            </section>
        </div>
    )
}

export default Post
