const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const request = require('request');
const key = require('../config.js');
const db = require('../db/mysql.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../dist/index.html`));

app.get('/test', (req, res) => {
  res.sendStatus(200);
});


const getSongs = () => {
  const options = {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      type: 'video',
      key: key.youtube,
      channelId: 'UCwTRjvjVge51X-ILJ4i22ew',
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
  // request.get(options, (err, response, data) => {
  //   console.log(data);
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     data.forEach((song) => {
  //       db.save(song);
  //     });
  //   }
  // });
};
app.post('/songs', (req, res) => {
  getSongs(req, res);
  res.sendStatus(200);
  // .then((data) => {
  // })
  // .catch((err) => {
  //   res.send(err);
  // });
});

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log('listening on port 8080!');
});
