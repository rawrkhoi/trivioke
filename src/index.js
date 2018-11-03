/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignUp from '../components/signUp.jsx';
import Login from '../components/login.jsx';
import VideoPlayer from '../components/player.jsx';
import Load from '../components/load.jsx';
import './index.css';

const Index = () => (
  <div>
    Welcome to Trivioke!
    <SignUp />
    <Login />
    <Load />
    <VideoPlayer />
  </div>
);

const Front = () => (
  <div>
    Welcome to Trivioke!
    <SignUp />
    <Login />
  </div>
);

const routing = (
  <Router>
    <div>
      <div>
        <Link to="/">SignUp/Login</Link>
      </div>
      <div>
        <Link to="/trivia">Trivia</Link>
      </div>
      <div>
        <Link to="/video">Karaoke</Link>
      </div>
      <Route exact path="/" component={Front} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/trivia" component={Load} />
      <Route exact path="/video" component={VideoPlayer} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('index'));
