import React from "react";
import ReactDOM from "react-dom";
import SignUp from "../components/signUp.jsx"
import Login from "../components/login.jsx"
import Game from '../components/game.jsx';
import VideoPlayer from "../components/player.jsx"
import Load from '../components/load.jsx'
import './index.css';



const Index = () => {
  return  (
    <div>
      Welcome to Trivioke!
      <SignUp></SignUp>
      <Login></Login>
      <Load></Load>
      <Game></Game>
      <VideoPlayer></VideoPlayer>
    </div>
  )
};
ReactDOM.render(<Index />, document.getElementById("index"));