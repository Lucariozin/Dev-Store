import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
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
`;

export const ProductImg = styled.img`
  width: 8rem;
`;

export const Title = styled.span`
  margin-left: 1rem;
`;

export const Quantity = styled.span`
  margin-left: auto;
`;

export const Price = styled.span`
  margin-left: 20rem;

  &::after {
    content: "X";
    color: var(--purple-100);
    margin-left: 1.8rem;
  }
`;
