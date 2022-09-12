import styled from 'styled-components';

export const Container = styled.button`
  background: var(--color-primary);
  color: var(--color-button-text);
  font-weight: 500;

  padding: 16px 0px;
  border-radius: 10px;
  margin-top: 12px;

  width: 100%;

  &:hover {
    transition: 300ms;
    background: var(--color-primary-dark);
  }
`;
