import React from "react";
// import facts from "./facts";
// import { Item } from "./Item";
import Circle from "../src/rendercond/Circle";



const App = () => {
  // const caract = facts.map((car) => (
  //   <Item fact={car.fact} id={car.id} key={car.id} on={car.on} />
  //   // <Item {...car} key={car.id} />
  // ));
  const showColor = [
    {
      id: "a",
      show: 1,
      hide:1,
    },
    {
      id: "b",
      show:2,
      hide: 0,
    },
    {
      id: "c",
      show: 3,
      hide:1 ,
    },
  ];

  const circles = React.Children.toArray(showColor.map( circle =>(
    <Circle {...circle}  className="item"/>
  )))

 

 

  return <>{circles}</>;
};

export { App };
