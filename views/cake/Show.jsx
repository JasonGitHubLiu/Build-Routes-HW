import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.cake.name}</h1>
      <p>Ingredients: {props.cake.ingredients}</p>
      <p> It's price is <strong>${props.cake.price}</strong></p>
      <a href="/cake">Back</a>
    </div>
  );
}

export default Show;
