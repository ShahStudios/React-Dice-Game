import React from 'react'
import { Container, StarterHeading, SampleWrapper, StandardButton } from './StartElements'
import { Link } from 'react-router-dom'

const StartScreen = () => {
    return (
        <>
            <Container>
                <StarterHeading>Dice Game </StarterHeading>
                <SampleWrapper>
                <Link to="/startgame"><StandardButton>Enter Lobby 🎲</StandardButton></Link>
                <Link to="/highscores"><StandardButton>High Scores 📈</StandardButton></Link>
                </SampleWrapper>
            </Container>
        </>
    )
}

export default StartScreen