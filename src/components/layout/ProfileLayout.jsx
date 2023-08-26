import { Link, Outlet, useParams } from "react-router-dom"
import Avatar from "../common/Avatar"
import useFetchProfile from "../../hooks/useFetchProfile"

// todo: add loading skeleton
const ProfileLayout = () => {
    const { profileId } = useParams()

    const {
        data: profileData,
        isLoading: profileIsLoading,
        isError: profileIsError,
        error: profileError,
    } = useFetchProfile(profileId)

    return (
        <div>
            <div className="bg-white p-4 mb-4 flex flex-col justify-center">
                <section className="flex items-center flex-col">
                    <Avatar
                        className="w-20 h-20 mb-3 cursor-pointer hover:brightness-105"
                        svgClassName="-left-2 -bottom-3.5 w-24 h-24"
                    />
                    {profileData && (
                        <>
                            <p className="text-lg font-semibold leading-6 cursor-pointer hover:underline">
                                {profileData.name}
                            </p>
                            <p className="text-gray-600 leading-6 cursor-pointer hover:underline">
                                {profileData.username}
                            </p>
                        </>
                    )}
                </section>
            </div>
            <Outlet />
        </div>
    )
}

export default ProfileLayout
