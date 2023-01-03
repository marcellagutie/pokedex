import styled, { keyframes } from "styled-components";

const pokeballAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const LoadingDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;
export const Pokeball = styled.img`
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 3px solid;
    animation: ${pokeballAnimation} 0.8s linear 0s infinite;
`;
