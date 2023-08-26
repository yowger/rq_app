import { useState } from "react"
import { useParams } from "react-router-dom"
import { useQueryClient } from "react-query"
import useFetchPhotos, { fetchPhotos } from "../hooks/useFetchPhotos"
import Pagination from "../components/common/Pagination"

// prefetch 2nd page, save last data
const Photos = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { photoId } = useParams()
    const queryClient = useQueryClient()

    const {
        data: photosData,
        isLoading: photosIsLoading,
        isError: photosIsError,
        error: photosError,
        isFetching: photosIsFetching,
    } = useFetchPhotos(photoId, pageNumber)

    if (photosData && photosData.totalPages > pageNumber) {
        const nextPageNumber = pageNumber + 1

        queryClient.prefetchQuery(["photos", photoId, nextPageNumber], () =>
            fetchPhotos(photoId, pageNumber)
        )
    }

    const onClickNextPage = () => {
        setPageNumber((page) => page - 1)
    }

    const onClickPreviousPage = () => {
        setPageNumber((page) => page + 1)
    }

    return (
        <div className="pb-4 bg-white p-4">
            {photosIsLoading ? (
                <p>loading</p>
            ) : (
                <>
                    <section className="">
                        <h2 className="text-lg font-semibold leading-6 text-center mb-2">
                            {photosData.totalCount} Photos
                        </h2>

                        <div className="grid md:grid-cols-4 grid-cols-3 gap-2 mb-4">
                            {photosData.photos.map((photo) => {
                                return (
                                    <div
                                        key={photo.id}
                                        className="bg-red-200 justify-center flex"
                                    >
                                        {photosIsFetching ? (
                                            <div className="w-full h-[168px] animate-pulse bg-gray-300 rounded-sm"></div>
                                        ) : (
                                            <img
                                                src={photo.thumbnailUrl}
                                                className="object-cover w-full rounded-sm cursor-pointer hover:brightness-105"
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    <Pagination
                        pageNumber={pageNumber}
                        totalPages={photosData.totalPages}
                        onNextPage={onClickNextPage}
                        onPreviousPage={onClickPreviousPage}
                    />
                </>
            )}
        </div>
    )
}

export default Photos
