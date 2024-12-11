import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
function Profile() {
    const {data} = useContext(UserContext);
    
    if(!data)return <div>Please Login-Bro</div>

    return <p>{data.userName}</p>
}

export default Profile
