const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trivioke',
});

connection.connect((err) => {
  if (err) {
    console.log('db connection error');
  } else {
    console.log('Connected');
  }
});

// this should only happen once;
const save = (data) => {
  const q = `insert into songs(artist, title, uri) values (${data.artist}, ${data.title}, ${data.url}, )`;
  connection.query(q, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('songs saved to db');
    }
  });
};

module.exports.save = save;
