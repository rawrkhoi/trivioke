import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Player } from 'video-react';
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: null,
    };
  }

  componentDidMount() {
    axios.get('/songs')
      .then((res) => {
        this.setState({ 
          videos: res.data,
        });

      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeVideo() {
    const rand = Math.floor(Math.random() * this.state.videos.length) + 1;
    this.setState({
      video: this.state.videos[rand]
    });
  }
  //
  render() {
    return (
      <div>
      
        <Player
        playsInline
        src="https://www.youtube.com/embed/${this.state.video.etag}"
        />
      </div>
        // <div className="video-player">
        //   <div className="embed-responsive embed-responsive-16by9">
        //     <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.state.video.etag}`} allowFullScreen></iframe>
        //   </div>
        //   <div className="video-player-details">
        //     <h3>{this.state.video.title}</h3>
        //   </div>
        // </div>
        /* embed video player
        add change video button
        return to main screen button */ 
    );
  }
}

export default VideoPlayer;