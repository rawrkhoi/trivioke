/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
import { Link, Route } from 'react-router-dom';
import Game from './game.jsx';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: {
        song: 'Dolly Parton - Jolene Karaoke Lyrics',
        uri: '8ff0szPBM2M',
      },
    };
    this.changeVideo = this.changeVideo.bind(this);
  }

  componentDidMount() {
    axios({ method: 'GET', url: '/songs', headers: { 'Access-Control-Allow-Origin': '*' } })
      .then((res) => {
        this.setState({
          video: res.data[3],
          videos: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeVideo() {
    const { videos } = this.state;
    const rand = Math.floor(Math.random() * 43) + 1;
    this.setState({
      video: videos[rand],
    });
  }

  render() {
    const { video } = this.state;
    return (
      <div>
        <button onClick={this.changeVideo} type="button">
          Change Song
        </button>
        <Iframe
          fluid="true"
          className="embed-responsive-item"
          url={`https://www.youtube.com/embed/${video.uri}`}
          width="500px"
          height="350px"
          allowFullScreen
        />
        <button type="button">
          <Link to="/trivia">Game</Link>
        </button>
        <Route exact path="/trivia" component={Game} />
      </div>
    );
  }
}
export default VideoPlayer;
