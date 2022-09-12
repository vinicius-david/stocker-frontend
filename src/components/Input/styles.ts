import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  border-radius: 8px;

  background: var(--color-input-background);
  border: 2px solid var(--color-input-background);
  color: var(--color-primary-light);

  margin-top: 16px;
  height: 48px;

  &:hover {
    transition: 300ms;
    border-color: var(--color-primary-dark);
  }

  svg {
    margin-left: 8px;
    margin-right: 8px;
  }

  input {
    padding: 6px 12px;
    background: var(--color-input-background);
    width: 75%;

    border-radius: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${shade(0.3, '#c53030')};
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-primary-dark);
      border-color: var(--color-primary-dark);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-primary-dark);
    `}
`;

export const Error = styled(Tooltip)`
  display: flex;
  align-items: flex-end;
  justify-content: end;

  svg {
  }

  span {
    margin-left: 40%;
    background: ${shade(0.3, '#c53030')};
    color: #eee;

    &::before {
      border-color: ${shade(0.3, '#c53030')} transparent;
    }
  }
`;
