import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData();

    // const [data,setData] = useState({});
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Shubham-jaizz")
    //     .then((result) => {
    //         return result.json();
    //     }).then((result) => {
    //         setData(result);
    //     })
    // },[])
    return (
        <div className="container flex w-full">
            <div className="contents flex-col ">
            <h1>{data.name}</h1>
            <h4>{data.bio}</h4>
            </div>
            <div className="image">
            <img src={data.avatar_url} alt="profile-Image" />
            </div>
        </div>
    )
}

export default Github
export const quickResponse = async () => {
    const response = await fetch("https://api.github.com/users/Shubham-jaizz")
    return response.json()
}