import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "../components/player.jsx"
import Login from "../components/login.jsx"

const Index = () => {
  return  (
    <div>
      Hello React!
      <VideoPlayer></VideoPlayer>
      <Login></Login>
    </div>
  )
};
ReactDOM.render(<Index />, document.getElementById("index"));