import * as Styles from '../styles/CartStyles';

import Head from 'next/head';
import { CartItem } from '../components/CartItem';
import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { productsInCart, totalPrice, numberOfProducts } = useCart();

  return (
    <Styles.Container>
      <Head>
        <title>Dev Store | Cart</title>
      </Head>

      <Styles.ProductsInCartContainer>

        <Styles.Head>
          <Styles.Product>Product</Styles.Product>
          <Styles.Quantity>Quantity</Styles.Quantity>
          <Styles.Price>Price</Styles.Price>
        </Styles.Head>

        {productsInCart.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            price={product.priceDiscount > 0 ? product.priceDiscount : product.price }
            productImg={product.image}
            quantity={1}
            title={product.title}
          />
        ))}

      </Styles.ProductsInCartContainer>

      <Styles.TotalContainer>
        <Styles.Total>
          Total:
          <Styles.TotalPrice> ${totalPrice.toFixed(2)}</Styles.TotalPrice>
        </Styles.Total>
      </Styles.TotalContainer>

      {numberOfProducts === 0 && (
        <Styles.NoProductsInTheCart>No Products In The Cart</Styles.NoProductsInTheCart>
      )}
    </Styles.Container>
  );
}
