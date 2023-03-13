import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>icecream</h1>
      <ul>
        {props.icecream.map((icecream, index) => (
          <li key={icecream.id}>
            <a href={`/icecream/${index}`}>
              <strong>{icecream.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
