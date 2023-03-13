import React from 'react';

function Index(props) {
  return (
    <div>
      <h4>
        <a href="/">Home Page</a>
      </h4>
      Index View
      <h1>Sushi</h1>
      <ul>
        {props.sushi.map((sushi, index) => (
          <li>
            <a href={`/sushi/${index}`}>
              <strong>{sushi.name}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
