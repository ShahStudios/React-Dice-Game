import React from 'react'
import { Container, StarterHeading, SampleWrapper, StandardButton } from './StartElements'

const StartScreen = () => {
    return (
        <>
            <Container>
                <StarterHeading>Dice Game </StarterHeading>
                <SampleWrapper>
                        <StandardButton>Start Game 🎲</StandardButton>
                        <StandardButton>High Scores 📈</StandardButton>
                </SampleWrapper>
            </Container>
        </>
    )
}

export default StartScreen