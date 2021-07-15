import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  text-align: center;
  margin: 125px auto;
  background-color: #f8f8ff;
  box-shadow: -2px 6px 18px 3px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

export const StarterHeading = styled.h1`
  font-size: 6rem;
  letter-spacing: 1;
  font-family: "Bebas Neue", cursive;
  margin: 0;
  color: #091d35;
`;

export const Players = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ScoreHeading = styled.h2`
  font-size: 4rem;
  letter-spacing: 1;
  font-family: "Bebas Neue", cursive;
  margin: 0;
  color: #091d35;
`;

export const Scoreboard = styled.span`
  font-size: 4rem;
  letter-spacing: 1;
  font-family: "Bebas Neue", cursive;
  margin: 0;
  color: #091d35;
`;

export const StandardButton = styled.button`
  color: #fff;
  padding: 20px 30px;
  font-size: 24px;
  margin: 30px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  background-color: var(--color-3);
`;

export const Player1 = styled.div``;

export const Player2 = styled.div``;

export const SampleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const Dice = styled.div`
  border-radius: 10px;
  width: 100px;
  height: 100px;
  background-color: var(--color-3);
  margin: 0 auto;
  font-size: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;

  animation: ${(props) =>
        props.active ? `box-shadow: -2px 6px 18px 3px rgba(0,0,0,0.75);` : "none"};
`;
