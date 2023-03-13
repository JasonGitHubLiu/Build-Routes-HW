import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Waffles</h1>
      <ul>
        {props.waffle.map((waffle, index) => (
          <li key={waffle.id}>
            <a href={`/waffle/${index}`}>
              <strong>{waffle.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
