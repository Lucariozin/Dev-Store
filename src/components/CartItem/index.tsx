import * as Styles from './styles';

import { useCart } from '../../hooks/useCart';
import { toastSuccessMessage } from '../../utils/toastSuccessMessage';

interface CartItemProps {
  id: number;
  productImg: string;
  title: string;
  quantity: number;
  price: number;
};

export function CartItem({ id, productImg, title, quantity, price }: CartItemProps) {
  const { removeProductInCart } = useCart();

  function handleRemoveProductInCart() {
    removeProductInCart(id);

    toastSuccessMessage('Product has been removed');
  }

  return (
    <Styles.Container>
      <Styles.ProductContainer>
        <Styles.ProductImg src={productImg} alt="Product's Image" />
        <Styles.Title>{title}</Styles.Title>
      </Styles.ProductContainer>

      <Styles.Quantity>{quantity}</Styles.Quantity>

      <Styles.PriceContainer>
        <Styles.Price>${price.toFixed(2)}</Styles.Price>
        
        <Styles.RemoveProductButton
          type="button"
          onClick={handleRemoveProductInCart}
        >
          X
        </Styles.RemoveProductButton>
      </Styles.PriceContainer>
      
    </Styles.Container>
  );
}
