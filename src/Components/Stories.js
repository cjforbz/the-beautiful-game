import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MY_RAPID_API_KEY from '../config';

const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: { category: 'Sports_Soccer', safeSearch: 'Off', textFormat: 'Raw' },
  headers: {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': MY_RAPID_API_KEY,
  },
};

function Stories(props) {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const fetchStories = async () => {
      await axios
        .request(options)
        .then(function (response) {
          setStories(response.data.value);
          console.log(response.data.value);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchStories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return stories[0] ? (
    <div className="story-container">
      {stories.map((story, idx) => {
        return (
          <div key={idx} className="story">
            <a href={story.url} className="story-link">
              <h4>{story.name}</h4>
              <p>{story.description}</p>
              <img
                className="provider-thumbnail"
                src={story.provider[0].image.thumbnail.contentUrl}
                alt=""
              />
              <span>-{story.provider[0].name}</span>
            </a>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default Stories;

// const stories = [];
// for (let i = 0; i < 50; i++) {
//   stories.push(
//     <div key={i} className="story">
//       <h4>
//         This is going to be a headline. It might be kinda long or it might be
//         kinda short
//       </h4>
//       <p>This will be the source, possibly a logo</p>
//     </div>
//   );
// }
