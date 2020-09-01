import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Home from './routes/Home'
import Insert from './routes/Insert'
import Update from './routes/Update'

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    max-width: 1366px;
    margin: 0 auto;
`
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Authenticated = () => {
    const [user, setUser] = useState(null)

    return (
        <Page>
            <Header />

            <Section>
                <BrowserRouter>
                    <Switch>
                        <Route path="/home">
                            <Home user={user} setUser={setUser} />
                        </Route>
                        <Route path="/insert">
                            <Insert />
                        </Route>
                        <Route path="/update">
                            <Update user={user} setUser={setUser} />
                        </Route>
                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
            </Section>
        </Page>
    )
}

export default Authenticated
