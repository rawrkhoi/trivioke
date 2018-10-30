const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const key = require('../config.js');
const db = require('../db/mysql.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../dist/index.html`));

app.post('/songs', (req, res) => {
  const url = 'https://www.googleapis.com/youtube/v3/search';
  const params = {
    part: 'snippet',
    type: 'video',
    key: key.youtube,
    channelId: 'UCwTRjvjVge51X-ILJ4i22ew',
    maxResults: 50,
  };
  axios.get(url, params)
    .then((data) => {
      data.forEach((song) => {
        db.save(song);
      });
      res.send(200);
    })
    .catch((err) => {
      res.send(err);
    });
});
