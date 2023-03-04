import React, {useState } from 'react';
import { createContext } from 'react';

export const MyContext = createContext(null);

const UserContext = ({children}) => {


    const [user,setUser] = useState({
        id : "",
        token : "",
        login : "",
        motDePasse : "",
    });


    return (
        <MyContext.Provider value={{user, setUser}}>
            {children}
        </MyContext.Provider>
    );
};

export default UserContext;