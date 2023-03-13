import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.waffle.name}</h1>
      <p>{props.waffle.description}</p>
      <p> It's price is ${props.waffle.price}</p>
      <a href="/waffle">Back</a>
    </div>
  );
}

export default Show;
