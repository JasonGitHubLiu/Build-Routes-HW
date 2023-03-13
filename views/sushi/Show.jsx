import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.sushi.name}</h1>
      <p>Ingredients: {props.sushi.ingredients}</p>
      <p> It's price is <strong>${props.sushi.price}</strong></p>
      <a href="/sushi">Back</a>
    </div>
  );
}

export default Show;
