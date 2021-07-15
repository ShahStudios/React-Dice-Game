import React from "react";
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

class GameScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    startBtnClick = () => {
        console.log('hi')
    }


    render() {
        const styles = {
            disableContent: {
                display: 'none'
            },
        }
        const { disableContent } = styles


        return (
            <Container>
                <StarterHeading id="message">Player 1 Turn</StarterHeading>
                <Players>
                    <Player1 id="player1">
                        <ScoreHeading>
                            Score:
                            <Scoreboard id="player1Scoreboard">0</Scoreboard>
                        </ScoreHeading>
                        <Dice id="player1Dice" active={this.state.active}>
                            -
                        </Dice>
                    </Player1>
                    <Player2 id="player2">
                        <ScoreHeading>
                            Score:
                            <Scoreboard id="player2Scoreboard">0</Scoreboard>
                        </ScoreHeading>
                        <Dice id="player2Dice" active={this.state.active}>
                            -
                        </Dice>
                    </Player2>
                </Players>

                <SampleWrapper>
                    <StandardButton id="startBtn" onClick={this.startBtnClick}>Start Game 🎮</StandardButton>
                    <StandardButton id="rollBtn" style={disableContent}>Roll Dice 🎲</StandardButton>
                    <StandardButton id="rollBtn2x" style={disableContent}>Roll Dice 2x😈</StandardButton>
                    <StandardButton id="resetBtn" style={disableContent}>Reset Game 🔁</StandardButton>
                </SampleWrapper>
            </Container>
        );
    }
}

export default GameScreen;
