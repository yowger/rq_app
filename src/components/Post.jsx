import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import clsx from "clsx"
import Avatar from "./Avatar"

const Post = ({ onClick, ...rest }) => {
    const navigate = useNavigate()

    const { id, user, userId, title, body } = rest
    const { username } = user

    const onClickPost = (event) => {
        event.stopPropagation()

        if (onClick) {
            onClick(id)
        }
    }

    const onClickAvatar = (event) => {
        event.stopPropagation()

        navigate("/profile")
    }

    const onClickUserName = (event) => {
        event.stopPropagation()

        navigate("/profile")
    }

    return (
        <div
            className={clsx(
                "mb-4 bg-white p-4 border-[1.5px] hover:border-gray-400  flex gap-4",
                onClick && "cursor-pointer"
            )}
            onClick={onClickPost}
        >
            <div className="h-10" onClick={onClickAvatar}>
                <Avatar className="hover:brightness-90 z-10 cursor-pointer" />
            </div>

            <div className="max-w-[65ch]">
                <p
                    onClick={onClickUserName}
                    className="text-sm text-gray-500 hover:underline cursor-pointer"
                >
                    {username}
                </p>

                <h2 className="text-lg mb-4 font-semibold leading-5">
                    {title}
                </h2>
                <p className="text-gray-700 leading-5">{body}</p>
            </div>
        </div>
    )
}

Post.propTypes = {
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

Post.displayName = "Post"

export default Post
