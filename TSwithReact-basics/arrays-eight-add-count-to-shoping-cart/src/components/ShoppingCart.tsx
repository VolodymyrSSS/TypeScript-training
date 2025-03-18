import React, { useState } from 'react';

interface ProductProps {
    id: number;
    name: string;
    count: number;
}

const initialProducts: ProductProps[] = [
    {id: 0, name: 'Baklava', count: 1}, 
    {id: 1, name: 'Cheese', count: 5,}, 
    {id: 2, name: 'Spaghetti',count: 2}
];

export default function ShoppingCart(): React.ReactElement {
  const [products, setProducts] = useState<ProductProps[]>(initialProducts);

  function handleIncreaseClick(productId: number) {
    setProducts(products.map(product => {
        if(product.id === productId) {
            return {...product, count: product.count + 1} // create a copy of the changed object for the new array
        } else {
            return product;
        }
    }));
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
        </li>
      ))}
    </ul>
  );
}
