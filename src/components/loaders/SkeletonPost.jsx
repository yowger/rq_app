import { twMerge } from "tailwind-merge"

const SkeletonPost = ({ className }) => {
    return (
        <div
            role="status"
            className={twMerge(
                "animate-pulse mb-4 bg-white p-4 border-[1.5px] flex gap-4",
                className
            )}
        >
            <div className="h-10">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-200 rounded-full"></div>
            </div>

            <div className="w-[65ch]">
                <div className="h-2 bg-gray-200 rounded-full w-[90px] mb-2.5" />
                <div className="h-3 bg-gray-200 rounded-full w-[350px] mb-4" />
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[550px]" />
                <div className="h-2 bg-gray-200 rounded-full max-w-[520px] mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full max-w-[510px]" />
            </div>
            <span className="sr-only">Loading more posts...</span>
        </div>
    )
}

export default SkeletonPost
