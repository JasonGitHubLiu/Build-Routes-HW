import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.juice.name}</h1>
      <p>{props.juice.description}</p>
      <p> It's price is ${props.juice.price}</p>
      <a href="/juice">Back</a>
    </div>
  );
}

export default Show;
