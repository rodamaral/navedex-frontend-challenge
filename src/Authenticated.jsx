import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from './routes/Home'

const Authenticated = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Redirect to="/home" />
        </Switch>
    </BrowserRouter>
)

export default Authenticated
