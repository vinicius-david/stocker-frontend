import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    width: 160px;

    padding: 4px;
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;
    text-align: center;

    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s;

    &::before {
      content: '';
      border-style: solid;
      border-color: transparent;
      border-width: 6px 6px 0 6px;

      position: absolute;
      top: 100%;
      left: 46%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
