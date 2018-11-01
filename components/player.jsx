import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Iframe from 'react-iframe';
class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: {
        song: "Dolly Parton - Jolene Karaoke Lyrics",
        uri: "8ff0szPBM2M",
    }
    };
    this.changeVideo = this.changeVideo.bind(this);

  }

  componentDidMount() {
  axios({ method: 'GET', url: '/songs', headers: { 'Access-Control-Allow-Origin': '*'} })
      .then((res) => {
        this.setState({ 
          video: res.data[3],
          videos: res.data,
        });
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeVideo() {
    const rand = Math.floor(Math.random() * 43) + 1;
    this.setState({
      video: this.state.videos[rand]
    });
  }
  //
  render() {
    return (
      <div>
        {/* <Player playsInline > */}
        <button onClick={this.changeVideo}>
        Change Song</button> 
          <Iframe fluid="true" 
          className="embed-responsive-item" 
          url={`https://www.youtube.com/embed/${this.state.video.uri}`} 
          width="500px"
          height="500px"
          allowFullScreen />
        {/* </Player> */}
      </div>
    );
  }
}
export default VideoPlayer;