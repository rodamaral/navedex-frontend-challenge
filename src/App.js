import React, { Suspense, useState } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Authenticated from './Authenticated'
import AuthContext from './contexts/AuthContext'
import Unuthenticated from './Unauthenticated'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #212121;
  }
`

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    return (
        <Suspense fallback={<span>Carregando...</span>}>
            <GlobalStyle />

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
