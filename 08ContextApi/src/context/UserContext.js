import React from 'react';

const UserContext  = React.createContext();

export default UserContext;

//whenever we make a context then we also have to make a provider which acts like top levele element and we can acccess the data from it

// <UserContextProvider>
//     <Card>
//         <Data></Data>
//     </Card>
// </UserContextProvider>
// like this type

//it will alwaays be jsx file