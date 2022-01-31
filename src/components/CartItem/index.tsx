import * as Styles from './styles';

interface CartItemProps {
  productImg: string;
  title: string;
  quantity: number;
  price: number;
};

export function CartItem({ productImg, title, quantity, price }: CartItemProps) {
  return (
    <Styles.Container>
      <Styles.ProductImg src={productImg} alt="Product's Image" />
      <Styles.Title>{title}</Styles.Title>
      <Styles.Quantity>{quantity}</Styles.Quantity>
      <Styles.Price>${price.toFixed(2)}</Styles.Price>
    </Styles.Container>
  );
}
