import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Consumables</h1>
      <ul>
        {props.consumables.map((allConsumables, index) => (
          <li>
            <a href={`/consumables/${index}`}>
              <strong>{allConsumables.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
