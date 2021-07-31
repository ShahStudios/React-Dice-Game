import React, { useState } from "react";
import {
    Container,
    StarterHeading,
    Players,
    ScoreHeading,
    Scoreboard,
    SampleWrapper,
    StandardButton,
    Dice,
    Player1,
    Player2,
} from "./GameElements";

function GameScreen() {
    const player1Dice = document.getElementById("player1Dice");
    const player2Dice = document.getElementById("player2Dice");
    const player1Scoreboard = document.getElementById("player1Scoreboard");
    const player2Scoreboard = document.getElementById("player2Scoreboard");
    const message = document.getElementById("message");
    const rollBtn = document.getElementById("rollBtn");
    const rollBtn2x = document.getElementById("rollBtn2x");
    const resetBtn = document.getElementById("resetBtn");
    const startBtn = document.getElementById("startBtn");

    let player1Score = 0;
    let player2Score = 0;
    let player1Turn = true;

    const [started, setStarted] = useState(false);
    const [rollDice, setrollDice] = useState(false);

    const buttons = started ? (
        <SampleWrapper>
            <StandardButton id="rollBtn">Roll Dice 🎲</StandardButton>
            <StandardButton id="rollBtn2x">Roll Dice 2x😈</StandardButton>
            <StandardButton id="resetBtn" onClick={toggleGame}>
                Reset Game 🔁
            </StandardButton>
        </SampleWrapper>
    ) : (
        <SampleWrapper>
            <StandardButton id="startBtn" onClick={toggleGame}>
                Start Game 🎮
            </StandardButton>
        </SampleWrapper>
    );


    function toggleGame() {
        const toggled = !started;
        setStarted(toggled);
    }


    return (
        <Container>
            <Players>
                <Player1 id="player1">
                    <ScoreHeading>
                        Score:
                        <Scoreboard id="player1Scoreboard">0</Scoreboard>
                    </ScoreHeading>
                    <Dice id="player1Dice">-</Dice>
                </Player1>
                <Player2 id="player2">
                    <ScoreHeading>
                        Score:
                        <Scoreboard id="player2Scoreboard">0</Scoreboard>
                    </ScoreHeading>
                    <Dice id="player2Dice">-</Dice>
                </Player2>
            </Players>
            {buttons}
        </Container>
    );
}

export default GameScreen;
