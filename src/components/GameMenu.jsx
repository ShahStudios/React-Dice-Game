import React from 'react'

import './GameMenu.css'

export default function GameMenu() {

    return (
        <>
            <div className="container">
                <h1 id="message">Player 1 Turn</h1>
                <div className="players">
                    <div id="player1">
                        <h1>Score:
                            <span id="player1Scoreboard">0</span>
                        </h1>
                        <div id="player1Dice" className="dice active">-</div>
                    </div>
                    <div id="player2">
                        <h1>Score:
                            <span id="player2Scoreboard">0</span>
                        </h1>
                        <div id="player2Dice" className="dice">-</div>
                    </div>
                </div>

                <div className="sample-wrapper">
                    <button id="startBtn">Start Game 🎮</button>
                    <button id="rollBtn">Roll Dice 🎲</button>
                    <button id="rollBtn2x">Roll Dice 2x😈</button>
                    <button id="resetBtn">Reset Game 🔁</button>
                </div>

            </div>
        </>
    )
}