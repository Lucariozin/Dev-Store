import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6rem;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  border-bottom: 0.1rem solid var(--gray-500);
  background-color: var(--gray-300);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  user-select: none;
  cursor: pointer;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  border-radius: 50%;
  border: 0.1rem solid var(--gray-800);
  font-size: 1.4rem;
  color: var(--purple-500);

  &::after {
    content: "";
    width: 4.2rem;
    height: 4.2rem;
    position: absolute;
    top: 0.2rem;
    left: 0.1rem;
    border-radius: 50%;
    border: 0.1rem solid #a31c7679;
  }
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 400;
  white-space: nowrap;
  color: var(--purple-100);
`;

export const CartContainer = styled.div`
  position: relative;
`;

export const ProductsInCart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 2rem;
  top: -0.5rem;
  border-radius: 1rem;
  background-color: var(--gray-800);
  font-size: 1.4rem;
  color: var(--gray-50);
  user-select: none;
`;
