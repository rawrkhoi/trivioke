import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "../components/player.jsx"
import Login from "../components/login.jsx"
import SignUp from "../components/signUp.jsx"
import Trivia from '../components/trivia.jsx';
import './index.css';
import Load from '../components/load.jsx'



const Index = () => {
  return  (
    <div>
      Hello React!
      <Login></Login>
      <SignUp></SignUp>
      <Trivia></Trivia>
      <Load></Load>
      <VideoPlayer></VideoPlayer>
    </div>
  )
};
ReactDOM.render(<Index />, document.getElementById("index"));