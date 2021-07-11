import React, { useState } from 'react';
import './app.css'

import StarIcon from '@material-ui/icons/Star';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

export default class GameMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1 className="starter-header">Dice Game </h1>
                    <div className="sample-wrapper">
                        <button>Start Game 🎲</button>
                        <button>High Scores 📈</button>
                    </div>
                </div>
            </>
        )
    }
}