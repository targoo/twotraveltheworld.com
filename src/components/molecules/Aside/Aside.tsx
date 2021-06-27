import React from 'react';
import styled from 'styled-components';

export const Aside = ({ children }) => {
  return (
    <StyledAside>
      <IconWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </IconWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </StyledAside>
  );
};

export const StyledAside = styled.aside`
  background: var(--color-contrast);
  border-color: var(--color-primary);
  margin-left: -32px;
  margin-right: -32px;
  position: relative;
  padding: 24px 32px;
  font-size: 17px;
  margin-top: 48px;
  margin-bottom: 64px;
  border-left: 3px solid;
  border-radius: 6px 6px 6px 3px;
  transition: background 350ms ease 0s;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(calc(-50% - 1.5px), -50%);
  padding: 8px;
  background: var(--color-background);
  border-radius: 50%;
`;

const ContentWrapper = styled.div``;
