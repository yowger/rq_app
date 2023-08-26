import { Link, useNavigate, useParams } from "react-router-dom"
import useFetchProfile from "../hooks/useFetchProfile"
import useFetchPosts from "../hooks/useFetchPosts"
import InfiniteScroll from "react-infinite-scroll-component"
import Post from "../components/Post"
import SkeletonPost from "../components/loaders/SkeletonPost"
import useFetchPostsByUser from "../hooks/useFetchPostsByUser"
import useFetchAlbums from "../hooks/useFetchAlbums"

const SkeletonLoader = Array.from({ length: 5 }).map((_, index) => (
    <SkeletonPost key={index} />
))

const Profile = () => {
    const { profileId } = useParams()
    const navigate = useNavigate()

    const {
        data: albumData,
        isLoading: albumIsLoading,
        isError: albumIsError,
        error: albumError,
    } = useFetchAlbums(profileId)

    const {
        data: postData,
        isLoading: postIsLoading,
        isError: postIsError,
        error: postError,
        isFetching: postIsFetching,
        hasNextPage,
        fetchNextPage,
    } = useFetchPostsByUser(5, profileId)

    const endMessage = hasNextPage === false && <p>no more post to show</p>

    const onClickAlbum = (profileId, albumId) => {
        navigate(`/profile/${profileId}/photos/${albumId}`)
    }

    return (
        <div>
            <div className="bg-white p-4 mb-4 flex flex-col justify">
                <section className="mb-2">
                    <h2 className="text-lg font-semibold leading-6 text-center mb-2">
                        Albums
                    </h2>

                    <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
                        {albumData &&
                            albumData.map((album, index) => {
                                const { id: albumId } = album

                                return (
                                    <div
                                        key={albumId}
                                        className="bg-red-200 justify-center flex"
                                    >
                                        <img
                                            onClick={() =>
                                                onClickAlbum(profileId, albumId)
                                            }
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
