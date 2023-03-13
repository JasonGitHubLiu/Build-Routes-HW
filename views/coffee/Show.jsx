import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.coffee.name}</h1>
      <p>
        {props.coffee.description}
      </p>
      <p> It's price is ${props.coffee.price}</p>
      <a href="/coffee">Back</a>
    </div>
  );
}

export default Show;
