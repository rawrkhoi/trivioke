import axios from 'axios';
class Player extends React.Component {
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
        this.setState({ videos: res.data });
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
        
      </div>
    );
  }
}