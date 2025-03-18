import React, { useState } from 'react';

interface ProductProps {
    id: number;
    name: string;
    count: number;
}

const initialProducts: ProductProps[] = [{
    id: 0,
    name: 'Baklava',
    count: 1,
    }, {
    id: 1,
    name: 'Cheese',
    count: 5,
    }, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
    }
];

export default function ShoppingCart(): React.ReactElement {
  const [products, setProducts] = useState<ProductProps[]>(initialProducts)

  function handleIncreaseClick(productId: number) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId: number) {
    // produce a new array and then filter to remove products with a count set to 0:
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p => p.count > 0);
    setProducts(nextProducts);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {handleIncreaseClick(product.id)}}>
            +
          </button>
          <button onClick={() => {handleDecreaseClick(product.id)}}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
