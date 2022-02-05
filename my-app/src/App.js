import React from "react";
import { data } from "./productsCards/data";
import Card from '../src/productsCards/Card'
import Header from "./productsCards/Header";








const App = () => {
  

  const products = data.map(product =>(
    <Card key={product.id} {...product} />
  ))
  
  return (
    <>
      <Header />
      <div className="product-container">{products}</div>
    </>
  );
};


export { App };
