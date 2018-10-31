import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "../components/player.jsx"
import Login from "../components/login.jsx"
import SignUp from "../components/signUp.jsx"

const Index = () => {
  return  (
    <div>
      Hello React!
      <VideoPlayer></VideoPlayer>
      <Login></Login>
      <SignUp></SignUp>
    </div>
  )
};
ReactDOM.render(<Index />, document.getElementById("index"));