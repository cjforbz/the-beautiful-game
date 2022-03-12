import React from 'react';

function Stories(props) {
  const stories = [];
  for (let i = 0; i < 50; i++) {
    stories.push(
      <div key={i} className="story">
        <h4>
          This is going to be a headline. It might be kinda long or it might be
          kinda short
        </h4>
        <p>This will be the source, possibly a logo</p>
      </div>
    );
  }
  return <div className="story-container">{stories}</div>;
}

export default Stories;
