import * as Styles from './styles';

import Router from 'next/router';
import { BsCart3 } from 'react-icons/bs'

export function Header() {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.LogoContainer onClick={() => Router.push('/')}>
          <Styles.Logo>DS</Styles.Logo>

          <Styles.Title>Dev Store</Styles.Title>
        </Styles.LogoContainer>

        <Styles.CartContainer onClick={() => Router.push('/cart')}>
          <BsCart3 size="34" color="#2e2e2e" />

          <Styles.ProductsInCart>5</Styles.ProductsInCart>
        </Styles.CartContainer>
      </Styles.Wrapper>
    </Styles.Container>
  );
}
