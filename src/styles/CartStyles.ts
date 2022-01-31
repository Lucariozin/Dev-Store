import styled from "styled-components";

export const Container = styled.section`
  max-width: 120rem;
  width: 100%;
  min-height: 100vh;
  margin: 8.5rem auto 4rem auto;
  padding: 0 1rem;
`;

export const ProductsInCartContainer = styled.div`
  width: 100%;
  min-height: 2rem;
`;

export const Head = styled.header`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 4.3rem;
  background-color: white;
  border-bottom: 0.1rem solid var(--gray-300);

  & span {
    font-size: 1.6rem;
    font-weight: 800;
    color: var(--gray-800);
  }
`;

export const Product = styled.span``;

export const Quantity = styled.span`
  margin-left: auto;
`;

export const Price = styled.span`
  margin-left: 20rem;
  margin-right: 2rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  height: 6rem;
`;

export const Total = styled.div`
  font-size: 2rem;
  color: var(--gray-800);
  margin-left: auto;
`;

export const TotalPrice = styled.span`
  font-weight: 800;
`;
