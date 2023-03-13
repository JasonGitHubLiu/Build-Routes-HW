import React from 'react';

function Index(props) {
  // can't use hooks or state
  // can't use event listeners in the same way
  return (
    <div>
      <h1>Home Page</h1>
      <h2>
        <a href="/consumables">All Consumables</a>
      </h2>
      <br />
      <h2>Drinks</h2>
      <h3>
        <a href="/boba">Boba</a>
      </h3>
      <h3>
        <a href="/coffee">Coffee</a>
      </h3>
      <h3>
        <a href="/juice">Juice</a>
      </h3>
      <br />
      <h2>Food</h2>
      <h3>
        <a href="/sushi">Sushi</a>
      </h3>
      <h3>
        <a href="/hotdog">Hot Dogs</a>
      </h3>
      <h3>
        <a href="/waffle">Waffles</a>
      </h3>
      <br />
      <h2>Desserts</h2>
      <h3>
        <a href="/cake">Cake</a>
      </h3>
      <h3>
        <a href="/icecream">Ice Cream</a>
      </h3>
    </div>
  );
}

export default Index;
