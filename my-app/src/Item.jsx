import React from 'react';

const Item = (props) => {
    console.log(props);
  return (
  <div>
      { props.on && <h4>Id: { props.id}</h4>}
      <h3>Fact: { props.fact}</h3>
      <hr />
  </div>
  );
};

export  { Item };
