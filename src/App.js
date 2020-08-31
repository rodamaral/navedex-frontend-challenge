import React, { Suspense, useState } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Authenticated from './Authenticated'
import AuthContext from './contexts/AuthContext'
import Unuthenticated from './Unauthenticated'

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    return (
        <Suspense fallback={<span>Carregando...</span>}>
            <BrowserRouter>
                <Switch>
                    <AuthContext.Provider value={{ token, setToken }}>
                        {token == null ? <Unuthenticated /> : <Authenticated />}
                    </AuthContext.Provider>
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}

export default App
