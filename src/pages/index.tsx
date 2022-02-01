import * as Styles from '../styles/HomeStyles';

import { api } from '../services/api';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ProductItem } from '../components/ProductItem';
import { Product } from '../@types/product';

interface HomeProps {
  products: Product[];
};

export default function Home({ products }: HomeProps) {
  return (
    <Styles.Container>
      <Head>
        <title>Dev Store | Home</title>
      </Head>

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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/api/products');

  return {
    props: {
      products: response.data,
    }
  };
};
