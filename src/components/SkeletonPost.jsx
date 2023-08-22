const SkeletonPost = () => {
    return (
        <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center mb-10"
        >
            <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full w-[480px] mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 max-w-[600px]"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[550px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[570px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[480px]"></div>
            </div>
            <span className="sr-only">Loading more posts...</span>
        </div>
    )
}

export default SkeletonPost
