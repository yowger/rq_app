import { forwardRef } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const Post = forwardRef((props, ref) => {
    const { id, title, body } = props

    return (
        <div className={clsx("mb-10", ref && "bg-red-400")} ref={ref}>
            <p className="">{id}</p>
            <h2 className="text-2xl">{title}</h2>
            <p>{body}</p>
        </div>
    )
})

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

Post.displayName = "Post"

export default Post
