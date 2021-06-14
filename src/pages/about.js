import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: var(--color-primary);
  /* color: ${({ theme }) => theme.colors.primary}; */
`;

export default function About() {
  return <Title>About</Title>;
}
