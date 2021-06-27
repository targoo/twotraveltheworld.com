import { StyledAside } from '../../molecules/Aside/Aside';

import styled from 'styled-components';

export const TextLink = styled.a`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);

  ${StyledAside} & {
    color: var(--color-white);
  }
`;
