import React, { useState } from 'react';
import './app.css'

export default class HomePage extends React.Component {
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