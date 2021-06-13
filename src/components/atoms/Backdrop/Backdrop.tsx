import React, { FC, ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';

type BackdropProps = {
  children: ReactNode;
  opacity: number;
  color: string;
};

interface CSSPropertiesWithVars extends CSSProperties {
  '--color': string;
  '--opacity': number;
}

export const Backdrop: FC<BackdropProps> = ({ children, opacity, color }) => {
  return (
    <Wrapper
      style={
        {
          '--color': color,
          '--opacity': opacity,
        } as CSSPropertiesWithVars
      }
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: var(--color);
  opacity: var(--opacity);
`;
