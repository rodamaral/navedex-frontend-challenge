import { createContext } from 'react'

const AuthContext = createContext({ token: null, setToken: null }) // TODO use localStorage?

export default AuthContext
