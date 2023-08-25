import { Link, useNavigate, useParams } from "react-router-dom"
import useFetchProfile from "../hooks/useFetchProfile"
import useFetchPosts from "../hooks/useFetchPosts"
import InfiniteScroll from "react-infinite-scroll-component"
import Post from "../components/Post"
import SkeletonPost from "../components/loaders/SkeletonPost"
import useFetchPostsByUser from "../hooks/useFetchPostsByUser"
import Avatar from "../components/common/Avatar"
import useFetchAlbums from "../hooks/useFetchAlbums"

const SkeletonLoader = Array.from({ length: 5 }).map((_, index) => (
    <SkeletonPost key={index} />
))

const Profile = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const {
        data: profileData,
        isLoading: profileIsLoading,
        isError: profileIsError,
        error: profileError,
    } = useFetchProfile(id)
    console.log({ profileData })

    const {
        data: albumData,
        isLoading: albumIsLoading,
        isError: albumIsError,
        error: albumError,
    } = useFetchAlbums(id)
    console.log("albums", albumData)

    const {
        data: postData,
        isLoading: postIsLoading,
        isError: postIsError,
        error: postError,
        isFetching: postIsFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useFetchPostsByUser(5, id)
    console.log({ postData })

    const endMessage = hasNextPage === false && <p>no more post to show</p>

    const onClickAlbum = (id) => {
        navigate(`/photos/${id}`)
    }

    return (
        <div>
            <div className="bg-white p-4 mb-4 flex flex-col justify-center">
                <section className="flex items-center flex-col">
                    <Avatar
                        className="w-20 h-20 mb-3"
                        svgClassName="-left-2 -bottom-3.5 w-24 h-24"
                    />
                    {profileData && (
                        <>
                            <p className="text-lg font-semibold leading-6">
                                {profileData.name}
                            </p>
                            <p className="text-gray-600 leading-6">
                                {profileData.username}
                            </p>
                        </>
                    )}
                </section>
            </div>

            <div className="bg-white p-4 mb-4 flex flex-col justify">
                <section className="mb-2">
                    <h2 className="text-lg font-semibold leading-6 text-center mb-2">
                        Albums
                    </h2>

                    <div className="grid grid-cols-4 gap-2">
                        {albumData &&
                            albumData.map((album, index) => {
                                return (
                                    <div
                                        key={album.id}
                                        className="bg-red-200 justify-center flex"
                                    >
                                        <img
                                            onClick={() => onClickAlbum(id)}
                                            src={`https://picsum.photos/125?random=${index}`}
                                            className="object-cover w-full rounded-sm cursor-pointer hover:brightness-105"
                                        />
                                    </div>
                                )
                            })}
                    </div>
                </section>
            </div>

            <section>
                <InfiniteScroll
                    dataLength={postData ? postData.length : 0}
                    next={fetchNextPage}
                    hasMore={hasNextPage}
                    loader={SkeletonLoader}
                    endMessage={endMessage}
                >
                    {postData?.map((post) => {
                        return <Post key={post.id} {...post} />
                    })}
                </InfiniteScroll>
            </section>
        </div>
    )
}

export default Profile
