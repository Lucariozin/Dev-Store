import * as Styles from './styles';
import { BsCart3 } from 'react-icons/bs'

import Router from 'next/router';

import { useCart } from '../../hooks/useCart';

export function Header() {
  const { numberOfProducts } = useCart();

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.LogoContainer onClick={() => Router.push('/')}>
          <Styles.Logo>DS</Styles.Logo>

          <Styles.Title>Dev Store</Styles.Title>
        </Styles.LogoContainer>

        <Styles.CartContainer onClick={() => Router.push('/cart')}>
          <BsCart3 size="34" color="#2e2e2e" />

          {numberOfProducts > 0 && (
            <Styles.ProductsInCart>{numberOfProducts}</Styles.ProductsInCart>
          )}
          
        </Styles.CartContainer>
      </Styles.Wrapper>
    </Styles.Container>
  );
}
