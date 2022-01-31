import styled from "styled-components";

export const Container = styled.div`
  width: 28rem;
  min-height: 34rem;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
  padding: 3rem;
  border-bottom: 0.1rem solid var(--gray-300);

  & img {
    width: 100%;
  }
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  min-height: 2rem;
  padding: 1.5rem 2rem;
`;

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--purple-100);
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.8rem;
  margin-top: 1rem;
  color: var(--gray-800);
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Prices = styled.div`
  display: flex;
`;

export const Price = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--gray-800);
`;

export const OldPrice = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  color: var(--gray-800);
  text-decoration: line-through;
`;

export const AddToCartButton = styled.button`
  height: 2.6rem;
  padding: 0 0.5rem;
  background-color: var(--purple-100);
  color: var(--gray-50);
  font-size: 1rem;
  font-weight: 800;
  border: none;
  border-radius: 0.5rem;
  margin-left: auto;
  cursor: pointer;
  transition: filter .2s;
  white-space: nowrap;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const InTheCartButton = styled.button`
  background-color: transparent;
  color: var(--green-500);
  border: none;
  margin-left: auto;
  cursor: pointer;
  white-space: nowrap;
`;
