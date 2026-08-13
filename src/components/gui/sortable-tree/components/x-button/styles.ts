import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 24px;
  border-radius: 4px;

  &:hover {
    /* stylelint-disable-next-line */
    background-color: rgb(0 0 0 / 5%);

    svg {
      fill: #6f7b88;
    }
  }
`;
