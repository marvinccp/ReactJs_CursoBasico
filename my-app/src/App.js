import React from 'react';
import facts from './facts'
import { Item } from './Item'

const App = () => {

    console.log(facts);

    const caract = facts.map((car) => (
      <Item fact={car.fact} id={car.id} key={car.id} on={car.on} />
    ));

  return <div>{caract}</div>;
};

export  {App};
