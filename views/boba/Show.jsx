import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.boba.name}</h1>
      <p>Ingredients: {props.boba.ingredients}</p>
      <p> It's price is <strong>${props.boba.price}</strong></p>
      <a href="/boba">Back</a>
    </div>
  );
}

export default Show;
