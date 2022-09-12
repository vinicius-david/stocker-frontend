import styled from 'styled-components';

import loginBackground from '../../assets/loginBackground.jpeg';

export const FormContainer = styled.div`
  width: 26vw;
  height: 50vh;
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

  h2 {
    align-self: center;
    font-size: 28px;
    margin-bottom: 15%;
    margin-left: 5%;
  }

  strong {
    width: 90%;
    font-size: 16px;
    margin-left: 5%;
    margin-bottom: 10%;
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
      height: 25%;
      width: 90%;
    }
  }

  &:hover {
    box-shadow: 3px 3px 6px #555;
    transition: 300ms;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;

  background: url(${loginBackground}) no-repeat center;
  background-size: cover;
`;
