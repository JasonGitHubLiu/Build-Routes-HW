import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Cake</h1>
      <ul>
        {props.cake.map((cake, index) => (
          <li>
            <a href={`/cake/${index}`}>
              <strong>{cake.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
