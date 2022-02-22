import React, { useState } from "react";

// import { data } from "./productsCards/data";
// import Card from '../src/productsCards/Card'
// import Header from "./productsCards/Header";

const App = () => {
  // const products = data.map(product =>(
  //   <Card key={product.id} {...product} />
  // ))
  const flags = ['🇨🇴 ', '🇧🇷 ', '🇦🇷 ', '🇻🇪 ']
  const initialState = ['🇪🇸 ', '🇵🇹 ']
  const [value, setvalue] = useState(initialState);

  const change = () => {
    const flag = flags[Math.floor(Math.random() * flags.length)]
    setvalue(prevState => [prevState, flag]);
  };

  return (
    <>
      <button onClick={change}> change </button>
      <div className="container">
     {value}
      </div>
      {/* <Header />
      <div 
      className="product-container"
      >
        {products}
        </div> */}
    </>
  );
};

export { App };
