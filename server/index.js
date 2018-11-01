const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const key = require('../config.js');
const db = require('../db/mysql.js');

const saltRounds = 10;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
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

<<<<<<< HEAD
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
=======
app.post('/signUp', (req, res) => {
  bcrypt.hash(req.query.pw, saltRounds, (err, hash) => {
    if (err) {
      res.send(500);
      console.log(err);
    } else {
      const q = 'insert into users(username, pw) values(?, ?)';
      const args = [req.query.name, hash];
      db.connection.query(q, args);
      res.redirect('/');
      res.end();
      console.log('user added to db');
    }
  });
});


const checkPassword = (req, res) => {
  const q = 'select * from users where username=?';
  const args = [req.query.name];
  db.connection.query(q, args, (err, results) => {
    bcrypt.compare(req.query.pw, results[0].pw, (err, result) => {
      if (result === true) {
        console.log('passwords match');
        res.redirect('/');
      } else {
        console.log('passwords don\'t match');
        res.redirect('/');
      }
    });
  });
};

app.get('/login', (req, res) => {
  checkPassword(req, res);
>>>>>>> 2ea3026e84034a7d4dbc2c6bb221d9404c39ede7
});

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${process.env.PORT || port}`);
});
