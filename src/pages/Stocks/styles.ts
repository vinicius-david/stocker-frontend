import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

import homeBackground from '../../assets/stocksBackground.jpg';

const animateOpacity = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
`;

const animateUp = keyframes`
  from {
    opacity: 0.2;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Main = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  flex: 1;

  position: relative;
`;

export const InfoContainer = styled(animated.div)`
  width: 90%;
  height: 85vh;
  padding: 24px 24px;
  border-radius: 12px;
  box-shadow: 4px 4px 5px #333;
  background: rgba(242, 254, 255);

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 16px;
  left: 5%;
  z-index: 1;

  animation: ${animateUp} 0.5s ease;

  * {
    opacity: 1;
  }

  .echarts-for-react {
    min-width: 100%;
    height: 60%;
  }
`;

export const InfoText = styled.div`
  width: 100%;
  height: 90%;
  padding: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    align-self: center;
    font-size: 48px;
  }

  h3 {
    font-size: 24px;
    text-align: justify;
  }

  div {
    background-color: var(--color-background);

    padding: 0;
    margin-top: 0;
    margin-left: 0;
    min-width: 100%;
  }
`;

export const InfoHeader = styled.div`
  width: 100%;
  height: 20%;
  margin: 8px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h2 {
    align-self: center;
    font-size: 48px;
    margin-right: 10%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 360px;

  button {
    max-width: 50%;
    max-height: 20%;
    margin: 2%;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  button {
    max-width: 50%;
    max-height: 20%;
    margin: 2%;

    background: rgba(0, 0, 0, 0);
  }
`;

export const Indicators = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 4%;

  div:hover {
    cursor: pointer;
    box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
    transition-duration: 0.3s;
    background-color: var(--color-primary-very-light);
  }

  div:active {
    cursor: move;
  }
`;

export const Indicator = styled(animated.div)`
  width: 13%;
  min-height: 12%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: right;

  padding: 2%;
  margin: 1%;
  border-radius: 16px;

  background: var(--color-text-title);

  h3 {
    text-decoration: underline;
    font-size: 16px;
    margin-bottom: 1%;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;

  background: url(${homeBackground}) no-repeat center;
  background-size: cover;

  animation: ${animateOpacity} 0.5s ease;
`;
