import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const Pagination = (props) => {
    const { pageNumber, totalPages, onNextPage, onPreviousPage } = props

    return (
        <div className="flex justify-center">
            <button
                onClick={onNextPage}
                disabled={pageNumber === 1}
                className={twMerge(
                    clsx(
                        "bg-white py-2 px-4 rounded-sm mr-2 hover border-2 border-white",
                        pageNumber <= 1
                            ? "text-gray-500"
                            : "hover:border-gray-300 active:bg-gray-300"
                    )
                )}
            >
                Prev
            </button>
            <button className="bg-white py-2 px-4 rounded-sm mr-2 hover border-2 border-white cursor-default">
                {pageNumber}
            </button>
            <button
                onClick={onPreviousPage}
                disabled={pageNumber >= totalPages}
                className={twMerge(
                    clsx(
                        "bg-white py-2 px-4 rounded-sm mr-2 hover border-2 border-white",
                        pageNumber >= totalPages
                            ? "text-gray-500"
                            : "hover:border-gray-300 active:bg-gray-300"
                    )
                )}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
