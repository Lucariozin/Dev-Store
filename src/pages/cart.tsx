import * as Styles from '../styles/CartStyles';

import { CartItem } from '../components/CartItem';

export default function Cart() {
  return (
    <Styles.Container>
      <Styles.ProductsInCartContainer>

        <Styles.Head>
          <Styles.Product>Product</Styles.Product>
          <Styles.Quantity>Quantity</Styles.Quantity>
          <Styles.Price>Price</Styles.Price>
        </Styles.Head>

        <CartItem
          price={2000}
          productImg="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg"
          quantity={1}
          title="Notebook 1"
        />

        <CartItem
          price={2000}
          productImg="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg"
          quantity={1}
          title="Notebook 1"
        />

        <CartItem
          price={2000}
          productImg="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SX679_.jpg"
          quantity={1}
          title="Notebook 1"
        />

        <Styles.TotalContainer>
          <Styles.Total>
            Total:
            <Styles.TotalPrice> ${8200.00}</Styles.TotalPrice>
          </Styles.Total>
        </Styles.TotalContainer>

      </Styles.ProductsInCartContainer>
    </Styles.Container>
  );
}
