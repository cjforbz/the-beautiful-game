import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stories() {
  const [stories, setStories] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data: storyData } = await axios.get('/allStories');
        setStories(storyData);
        setLoading(false);
      } catch (error) {
        console.log(error);
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
                src={
                  story.provider[0].image
                    ? story.provider[0].image.thumbnail.contentUrl
                    : 'loading'
                }
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
