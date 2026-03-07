import React, { useState } from 'react'
import { createContext } from 'react'



export const userContext = createContext()

const AuthContext = ({children}) => {

    const [user,setUser] = useState('')
  return (
    <div>

       <userContext.Provider value = {[user,setUser]} >
       

            {children}


        </userContext.Provider>
    </div>
  )
}

export default AuthContext

