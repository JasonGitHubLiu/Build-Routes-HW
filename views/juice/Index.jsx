import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Juice</h1>
      <ul>
        {props.juice.map((juice, index) => (
          <li key={juice.id}>
            <a href={`/juice/${index}`}>
              <strong>{juice.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
