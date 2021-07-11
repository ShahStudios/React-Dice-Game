import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import Navbar from "./components/Navbar";
import Home from './pages'

import './app.css'

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
            <HomePage />
        </Router>
    )
}