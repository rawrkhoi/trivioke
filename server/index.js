const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const key = require('../config.js');
const db = require('../db/mysql.js');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(`${__dirname}/../dist/index.html`));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/songs', (req, res) => {
  db.connection.query('select * from songs', (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

const getSongs = () => {
  const options = {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      type: 'video',
      key: key.youtube,
      channelId: 'UCXosPWESPuLZoG66YuHKX9Q',
      maxResults: 50,
    },
  };
  axios.get('https://www.googleapis.com/youtube/v3/search', options)
    .then((data) => {
      data.data.items.forEach((song) => {
        db.save(song);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

app.post('/songs', (req, res) => {
  getSongs(req, res);
  res.sendStatus(200);
});

const getQuest = () => {
  const options = {
    params: {
      amount: 1,
      category: '9',
      difficulty: 'medium',
      type: 'multiple',
    },
  };
  axios.get('https://opentdb.com/api.php?', options)
    .then((data) => {
      data.data.results.forEach((quest) => {
        console.log(quest);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

app.post('/trivia', (req, res) => {
  getQuest(req, res);
  res.sendStatus(200);
});

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});
