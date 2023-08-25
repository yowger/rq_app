import { twMerge } from "tailwind-merge"

const Comment = ({ className, ...rest }) => {
    const { email, body } = rest
    return (
        <div className={twMerge("mb-2 bg-white p-4", className)}>
            <div className="max-w-[65ch]">
                <p className="text-sm text-gray-500 mb-2">{email}</p>
                <p className="leading-5 text-gray-700">{body}</p>
            </div>
        </div>
    )
}

export default Comment
