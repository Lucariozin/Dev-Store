import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { Product } from '../@types/product';

interface CartContextData {
  productsInCart: Product[];
  numberOfProducts: number;
  totalPrice: number;
  addProductInCart: (product: Product) => void;
  removeProductInCart: (productId: number) => void;
  productIsAlreadyInTheCart: (productId: number) => boolean;
};

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);

  const numberOfProducts = productsInCart.length;

  const totalPrice = productsInCart.reduce((ac, product) => {
    if (product.priceDiscount > 0) {
      return ac += product.priceDiscount;
    }

    return ac += product.price;
  }, 0);

  const addProductInCart = useCallback((product: Product) => {
    setProductsInCart((oldState) => [ ...oldState, product ]);
  }, []);

  const removeProductInCart = useCallback((productId: number) => {
    const newProductsInCart = productsInCart.filter((product) => {
      if (product.id !== productId) return product;
      return;
    });

    setProductsInCart(newProductsInCart);
  }, [productsInCart]);

  const productIsAlreadyInTheCart = useCallback((productId: number): boolean => {
    let productIsInTheCart = false;

    productsInCart.forEach((product) => {
      if (product.id === productId) productIsInTheCart = true;
    });

    return productIsInTheCart;
  }, [productsInCart]);

  return (
    <CartContext.Provider value={{
      productsInCart,
      addProductInCart,
      removeProductInCart,
      productIsAlreadyInTheCart,
      totalPrice,
      numberOfProducts
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
