import styled, { keyframes } from 'styled-components';

import loginBackground from '../../assets/loginBackground.jpeg';

const animateOpacity = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 0.975;
  }
`;

const animateUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 0.975;
    transform: translateX(0px);
  }
`;

export const FormContainer = styled.div`
  width: 26vw;
  height: 60vh;
  padding: 24px 24px;
  border-radius: 12px;
  box-shadow: 4px 4px 5px #333;
  background: var(--color-background);

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 20%;
  left: 37.5%;
  z-index: 2;

  animation: ${animateUp} 1s ease;

  h2 {
    align-self: center;
    width: 80%;
    font-size: 28px;
    margin-bottom: 15%;
    margin-left: 5%;
  }

  strong {
    font-size: 16px;
    margin-left: 5%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    div {
      width: 90%;
    }

    button {
      height: 14%;
      width: 90%;
    }
  }

  &:hover {
    box-shadow: 3px 3px 6px #555;
    transition: 300ms;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 8%;
  margin-left: 5%;
  width: 90%;

  a {
    margin-left: 4%;
    text-decoration: none;
    color: var(--color-primary);

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;

  background: url(${loginBackground}) no-repeat center;
  background-size: cover;

  animation: ${animateOpacity} 0.5s ease;
`;
