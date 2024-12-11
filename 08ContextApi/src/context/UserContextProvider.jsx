import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

//children param is the inner jsx of the porject which uses contextApi
const UserContextProvider = ({children})=>{
    const [data,setData] = useState(null);
    //we can give more tha this data also
    return(
    <UserContext.Provider value={{data,setData}}>
        {children}
    </UserContext.Provider>
    )

}

export default UserContextProvider;