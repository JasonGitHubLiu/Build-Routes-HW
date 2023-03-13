import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Boba</h1>
      <ul>
        {props.boba.map((boba, index) => (
          <li>
            <a href={`/boba/${index}`}>
              <strong>{boba.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
