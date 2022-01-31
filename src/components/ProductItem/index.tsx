import * as Styles from './styles';

import Image from 'next/image';

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
  return (
    <Styles.Container>
      <Styles.ImgContainer>
        <Image
          src={productImg}
          alt="Product's image"
          width={220}
          height={129}
        />
      </Styles.ImgContainer>

      <Styles.ProductInfoContainer>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>

        <Styles.PriceContainer>
          <Styles.Prices>
            <Styles.Price>${price.toFixed(2)}</Styles.Price>

            {priceDiscount > 0 && (
              <Styles.OldPrice>${priceDiscount.toFixed(2)}</Styles.OldPrice>
            )}

          </Styles.Prices>
          
          {/* <Styles.InTheCartButton>in the cart</Styles.InTheCartButton> */}
          <Styles.AddToCartButton>add to cart +</Styles.AddToCartButton>
        </Styles.PriceContainer>
      </Styles.ProductInfoContainer>
    </Styles.Container>
  );
}
