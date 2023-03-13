import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Hot Dogs</h1>
      <ul>
        {props.hotdog.map((hotdog, index) => (
          <li>
            <a href={`/hotdog/${index}`}>
              <strong>{hotdog.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
