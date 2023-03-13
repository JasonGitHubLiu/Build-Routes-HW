import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.consumables.name}</h1>
      <p>{props.consumables.description}</p>
      <p> It's price is ${props.consumables.price}</p>
      <a href="/consumables">Back</a>
    </div>
  );
}

export default Show;
