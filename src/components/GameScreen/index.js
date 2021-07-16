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
    const [started, setStarted] = useState(false)
    const buttons = started
        ? <SampleWrapper>
            <StandardButton id="rollBtn" >Roll Dice 🎲</StandardButton>
            <StandardButton id="rollBtn2x" >Roll Dice 2x😈</StandardButton>
            <StandardButton id="resetBtn" onClick={toggleGame}>Reset Game 🔁</StandardButton>
        </SampleWrapper>
        : <SampleWrapper>
            <StandardButton id="startBtn" onClick={toggleGame} >Start Game 🎮</StandardButton>
        </SampleWrapper>
    function startGame() {
        setStarted(true)
    }
    function toggleGame() {
        const toggled = !started
        setStarted(toggled)
    }
    const playerOne = started && <StarterHeading id="message">Player 1 Turn</StarterHeading>
    return (
        <Container>
            {playerOne}
            <Players>
                <Player1 id="player1">
                    <ScoreHeading>
                        Score:
                        <Scoreboard id="player1Scoreboard">0</Scoreboard>
                    </ScoreHeading>
                    <Dice id="player1Dice">
                        -
                    </Dice>
                </Player1>
                <Player2 id="player2">
                    <ScoreHeading>
                        Score:
                        <Scoreboard id="player2Scoreboard">0</Scoreboard>
                    </ScoreHeading>
                    <Dice id="player2Dice">
                        -
                    </Dice>
                </Player2>
            </Players>
            {buttons}

        </Container>
    );
}

export default GameScreen;
