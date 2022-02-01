import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.5rem 1.5rem;
  max-width: 118.5rem;
  width: 100%;
  min-height: 100vh;
  margin: 11rem auto 4rem auto;
  padding: 0 1rem;

  @media (max-width: 300px) {
    gap: 2rem;
  }
`;
