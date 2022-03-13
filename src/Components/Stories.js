import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stories(props) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data: storyData } = await axios.get('/allStories');
        console.log(storyData);
        setStories(storyData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return !loading ? (
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
    <div>loading</div>
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
