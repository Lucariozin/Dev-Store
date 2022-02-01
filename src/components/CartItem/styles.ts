import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 7rem;
  padding: 0 1rem 0 1rem;
  background-color: white;
  border-bottom: 0.1rem solid var(--gray-300);
  transition: all .3s ease;

  & span {
    font-size: 1.6rem;
    color: var(--gray-800);
  }

  &:hover {
    background-color: var(--gray-50);
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 8rem;
`;

export const Title = styled.span`
  margin-left: 1rem;
  white-space: nowrap;
`;

export const Quantity = styled.span`
  margin-left: auto;

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 2rem;

    &::before {
      content: "Quantity: ";
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--gray-800);
    }
  }
`;

export const PriceContainer = styled.div`
  @media (max-width: 500px) {
    &::before {
      content: "Price: ";
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--gray-800);
    }

    margin-top: 2rem;
  }
`;

export const Price = styled.span`
  margin-left: 20rem;

  @media (max-width: 600px) {
    margin-left: 10rem;
  }

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

export const RemoveProductButton = styled.button`
  height: 1.6rem;
  font-size: 1.6rem;
  color: var(--purple-100);
  border: none;
  background-color: transparent;
  margin-left: 1.8rem;
  cursor: pointer;
`;
