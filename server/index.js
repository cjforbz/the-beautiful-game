const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/', (req, res, next) => {
  console.log('working');
  res.json('here');
});

app.get('/allStories', async (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: { category: 'Sports_Soccer', safeSearch: 'Off', textFormat: 'Raw' },
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  try {
    await axios.request(options).then((response) => {
      res.json(response.data.value);
    });
  } catch (error) {}
});

app.listen(PORT, () => console.log(`getting it done on Port ${PORT}`));
