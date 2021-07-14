import styled from 'styled-components'


export const Container = styled.div`
    max-width: 800px;
    text-align: center;
    margin: 125px auto;
    background-color: #f8f8ff;
    box-shadow: -2px 6px 18px 3px rgba(0,0,0,0.75);
    padding: 100px;
`

export const StarterHeading = styled.h1`
    font-size: 6rem;
    letter-spacing: 1;
    font-family: 'Bebas Neue', cursive;
    margin: 0;
    color: #091d35;
`

export const SampleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
`

export const StandardButton = styled.button`
    color: #fff;
    padding: 20px 30px;
    font-size: 20px;
    margin: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    background-image: linear-gradient(135deg, var(--color-1) , var(--color-2));
`
