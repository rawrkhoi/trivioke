/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
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
ReactDOM.render(<Index />, document.getElementById('index'));
