import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export const WhoAreWe = () => {
  return (
    <StyledWhoAreWe>
      <StyledTitle>
        <span>Who are we?</span>
      </StyledTitle>
      <StyledContent>
        <StyledFigure>
          <Image alt="Next.js logo" src="/whoarewe/kro.png" layout="fixed" width={300} height={300} />
          <figcaption>An elephant at sunset</figcaption>
        </StyledFigure>
        <StyledFigure>
          <Image alt="Next.js logo" src="/whoarewe/david.jpg" layout="fixed" width={300} height={300} />
          <figcaption>An elephant at sunset</figcaption>
        </StyledFigure>
      </StyledContent>
    </StyledWhoAreWe>
  );
};

const StyledWhoAreWe = styled.div`
  width: 100%;
`;

const StyledTitle = styled.h2`
  color: var(--color-primary);
  font-size: 3rem;
  position: relative;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 3rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  font-family: Amatic SC, sans-serif;

  &:before {
    content: '';
    display: block;
    border-top: 1px solid var(--color-contrast);
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  span {
    background: var(--color-white);
    padding: 0 24px;
    position: relative;
    z-index: 5;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const StyledFigure = styled.figure``;
