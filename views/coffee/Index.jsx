import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Coffee</h1>
      <ul>
        {props.coffee.map((coffee, index) => (
          <li>
            <a href={`/coffee/${index}`}>
              <strong>{coffee.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
