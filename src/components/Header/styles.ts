import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  min-height: 10vh;
  padding: 0 5% 0 10%;

  background: var(--color-background-dark);
  color: var(--color-text-title);

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 48px;
  }
`;

export const HeaderContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  form {
    display: flex;

    div {
      width: 70%;
      margin-top: 0;
    }

    button {
      background: var(--color-background-dark);
      margin-left: 8px;

      &:hover {
        color: #fff;
        transition: 300ms;
      }
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--color-text-base);
  }

  svg {
    margin-left: 24px;

    &:hover {
      color: #fff;
      cursor: pointer;
      transition: 300ms;
    }
  }
`;
