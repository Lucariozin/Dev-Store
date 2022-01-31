import { useCart } from '../../hooks/useCart';
import * as Styles from './styles';

interface CartItemProps {
  id: number;
  productImg: string;
  title: string;
  quantity: number;
  price: number;
};

export function CartItem({ id, productImg, title, quantity, price }: CartItemProps) {
  const { removeProductInCart } = useCart();

  return (
    <Styles.Container>
      <Styles.ProductImg src={productImg} alt="Product's Image" />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Quantity>{quantity}</Styles.Quantity>
      <Styles.Price>${price.toFixed(2)}</Styles.Price>
      <Styles.RemoveProductButton
        type="button"
        onClick={() => removeProductInCart(id)}
      >
        X
      </Styles.RemoveProductButton>
    </Styles.Container>
  );
}
