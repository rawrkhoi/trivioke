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

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup/">SignUp</Link>
        </li>
        <li>
          <Link to="/video">VideoPlayer</Link>
        </li>
      </ul>
      <Route path="/" component={Index} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/video" component={VideoPlayer} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('index'));
