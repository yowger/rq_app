import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import useFetchProfile from "../hooks/useFetchProfile"
import Avatar from "../components/common/Avatar"

const Photos = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const {
        data: profileData,
        isLoading: profileIsLoading,
        isError: profileIsError,
        error: profileError,
    } = useFetchProfile(id)

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
        </div>
    )
}

export default Photos
