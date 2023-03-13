import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.icecream.name}</h1>
      <p>{props.icecream.description}</p>
      <p> It's price is ${props.icecream.price}</p>
      <a href="/icecream">Back</a>
    </div>
  );
}

export default Show;
