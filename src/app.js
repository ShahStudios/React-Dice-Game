import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";

import Home from './pages/Home'
import SignUp from './pages/SignUp'

import './app.css'

export default function App() {
    return (
    < Router >
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </Router >
    ) 
}