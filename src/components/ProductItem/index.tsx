import * as Styles from './styles';

import { toastSuccessMessage } from '../../utils/toastSuccessMessage';
import { useCart } from '../../hooks/useCart';
import Router from 'next/router';

interface ProductItemProps {
  id: number;
  productImg: string;
  title: string;
  description: string;
  price: number;
  priceDiscount: number;
};

export function ProductItem({
  id,
  productImg,
  title,
  description,
  price,
  priceDiscount
}: ProductItemProps) {
  const { productIsAlreadyInTheCart, addProductInCart } = useCart();

  function handleAddProductInCart() {
    addProductInCart({
      id,
      description,
      image: productImg,
      price,
      priceDiscount,
      title,
    });

    toastSuccessMessage('Product has been added');
  }

  return (
    <Styles.Container>
      <Styles.ImgContainer>
        <Styles.Image src={productImg} alt="Product's image" />
      </Styles.ImgContainer>

      <Styles.ProductInfoContainer>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>

        <Styles.PriceContainer>
          <Styles.Prices>
            {priceDiscount > 0 ? (
              <Styles.Price>${priceDiscount.toFixed(2)}</Styles.Price>
            ) : (
              <Styles.Price>${price.toFixed(2)}</Styles.Price>
            )}
            
            {priceDiscount > 0 && (
              <Styles.OldPrice>${price.toFixed(2)}</Styles.OldPrice>
            )}

          </Styles.Prices>
          
          {productIsAlreadyInTheCart(id) ? (
            <Styles.InTheCartButton
              type="button"
              onClick={() => Router.push('/cart')}
            >
              in the cart
            </Styles.InTheCartButton>
          ) : (
            <Styles.AddToCartButton
              type="button"
              onClick={handleAddProductInCart}
            >
              add to cart +
            </Styles.AddToCartButton>
          )}

        </Styles.PriceContainer>
      </Styles.ProductInfoContainer>
    </Styles.Container>
  );
}
