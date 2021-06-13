import React from 'react';
import styled from 'styled-components';

export function Backdrop({ opacity, color, children }) {
  return (
    <Wrapper
      style={{
        '--color': color,
        '--opacity': opacity,
      }}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--color);
  opacity: var(--opacity);
`;
