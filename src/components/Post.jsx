import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"
import Avatar from "./common/Avatar"

const Post = ({ shouldLinkToPost = true, className, ...rest }) => {
    const navigate = useNavigate()

    const { id, user, userId, title, body } = rest
    const { username } = user || ""

    const onClickPost = (event) => {
        if (!shouldLinkToPost) return

        event.stopPropagation()

        navigate(`/post/${id}`)
    }

    const onClickAvatar = (event) => {
        event.stopPropagation()

        navigate(`/profile/${userId}`)
    }

    const onClickUserName = (event) => {
        event.stopPropagation()

        navigate(`/profile/${userId}`)
    }

    return (
        <div
            className={twMerge(
                clsx(
                    "mb-4 bg-white p-4 border-[1.5px] hover:border-gray-400 flex gap-4",
                    shouldLinkToPost && "cursor-pointer",
                    className
                )
            )}
            onClick={onClickPost}
        >
            <div onClick={onClickAvatar} className="h-10">
                <Avatar className="hover:brightness-90 z-10 cursor-pointer bg" />
            </div>

            <div className="max-w-[65ch]">
                <p
                    onClick={onClickUserName}
                    className="text-sm text-gray-500 hover:underline cursor-pointer w-min"
                >
                    {username}
                </p>

                <h2 className="text-lg mb-4 font-semibold leading-5">
                    {title}
                </h2>
                <p className="text-gray-700 leading-5 line-clamp-3">{body}</p>
            </div>
        </div>
    )
}

Post.propTypes = {
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
}

Post.displayName = "Post"

export default Post
