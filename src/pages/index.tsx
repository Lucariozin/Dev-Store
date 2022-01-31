import * as Styles from '../styles/HomeStyles';

import { api } from '../services/api';
import { useEffect, useState } from 'react';

import { ProductItem } from '../components/ProductItem';

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  priceDiscount: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/api/products').then((response) => setProducts(response.data));
  }, []);

  return (
    <Styles.Container>

      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          priceDiscount={product.priceDiscount}
          productImg={product.image}
        />
      ))}

    </Styles.Container>
  )
}
