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
        super(props);
        this.state = { 
            active: "",
            display: 'none'

        };
    }

    render() {
        const styles = {
            startBtnStyle: {
                display: 'none'
            },
            rollBtn2xStyle: {
                display: 'none'
            },
            rollBtnStyle2x: {
                display: 'none'
            },
            resetBtnStyle: {
                display: 'none'
            }
        }

        const { startBtnStyle, rollBtnStyle, rollBtnStyle2x, resetBtnStyle } = styles

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
                    <StandardButton style={startBtnStyle}>Start Game 🎮</StandardButton>
                    <StandardButton style={rollBtnStyle}>Roll Dice 🎲</StandardButton>
                    <StandardButton style={rollBtnStyle2x}>Roll Dice 2x😈</StandardButton>
                    <StandardButton style={resetBtnStyle}>Reset Game 🔁</StandardButton>
                </SampleWrapper>
            </Container>
        );
    }
}

export default GameScreen;
