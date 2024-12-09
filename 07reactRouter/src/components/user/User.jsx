import React from 'react'
import { useParams } from 'react-router'
function User() {
    const {userId} = useParams();
    return (
        <h1 className=' text-gray-100 p-5 bg-yellow-500 ' >User:{userId}</h1>
    )
}

export default User
