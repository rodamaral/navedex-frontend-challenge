import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Home from './routes/Home'
import Insert from './routes/Insert'

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-width: 1366px;
    margin: 0 auto;
`

const Authenticated = () => (
    <Page>
        <Header />

        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/insert">
                        <Insert />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </BrowserRouter>
        </section>
    </Page>
)

export default Authenticated
