import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Home from './pages/Home'
import StartGame from './pages/StartGame'
import HighScores from './pages/HighScores'
import SignIn from './pages/SignIn'

import './app.css'

export default function App() {
    return (
    < Router >
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/highscores" component={HighScores} />
                <Route path="/startgame" component={StartGame} />
            </Switch>
        </Router >
    ) 
}