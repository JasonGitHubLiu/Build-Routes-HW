import React from 'react';

function Show(props) {
  return (
    <div>
      Show View
      <h1>{props.hotdog.name}</h1>
      <p>{props.hotdog.description}</p>
      <p> It's price is ${props.hotdog.price}</p>
      <a href="/hotdog">Back</a>
    </div>
  );
}

export default Show;
