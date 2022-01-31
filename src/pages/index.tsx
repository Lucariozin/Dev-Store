import * as Styles from '../styles/HomeStyles';

import { api } from '../services/api';
import { useEffect, useState } from 'react';

import { ProductItem } from '../components/ProductItem';
import { Product } from '../@types/product';

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
