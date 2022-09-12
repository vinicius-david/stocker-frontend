import styled, { keyframes } from 'styled-components';

import homeBackground from '../../assets/homeBackground.jpeg';

const animateOpacity = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
`;

const animateFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: 40vh;

  position: absolute;
  top: 10vh;
  left: 10vw;
  z-index: 2;

  animation: ${animateFromLeft} 1s ease-out;

  h1 {
    color: var(--color-text-title);
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h3 {
    color: var(--color-text-complement);
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.6px;

    margin-top: 3vh;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  height: 5vh;
  width: 45%;

  margin-top: 4vh;
`;

export const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-primary-light);
  color: #0a290a;

  border-radius: 4px;
  margin-bottom: 2vh;

  height: 48px;
  width: 240px;

  svg {
    width: 30%;
    height: 100%;
    padding: 12px;
    border-radius: 4px 0 0 4px;

    background: var(--color-primary-light);
  }

  a {
    background: var(--color-text-complement);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 12px 20px;
    border-radius: 0 4px 4px 0;

    font-weight: 700;
    text-decoration: none;
    color: #0a290a;

    &:hover {
      background: var(--color-primary-dark);
      color: var(--color-button-text);
      transition: 300ms;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background: url(${homeBackground}) no-repeat center;
  background-size: cover;

  animation: ${animateOpacity} 0.5s ease;
`;
