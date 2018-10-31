import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "../components/player.jsx"

const Index = () => {
  return  (
    <div>
      Hello React!
      <VideoPlayer></VideoPlayer>
    </div>
  )
};
ReactDOM.render(<Index />, document.getElementById("index"));