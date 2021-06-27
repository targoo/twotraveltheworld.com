import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 32px;
  padding: 0 32px;
  border-radius: 16px;
  border: none;
  color: white;
  font-size: 13px;
  font-weight: 600;
  background-color: var(--color-primary);
  cursor: pointer;
  height: var(--min-tap-target-height);
`;

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
