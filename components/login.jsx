/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React from 'react';
import axios from 'axios';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: '',
      pw: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // routing() {
  //   <Router>
  //     <div>
  //       <Route exact path="/login" component={Login} />
  //       {/* <Route exact path="/trivia" component={Load} /> */}
  //       <Route exact path="/video" component={VideoPlayer} />
  //     </div>
  //   </Router>;
  // }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    const loginInfo = this.state;
    axios({ method: 'GET', url: '/login', params: loginInfo })
      .then((response) => {
        console.log(response);
        this.setState({ redirect: true });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const { redirect } = this.state;
    if (!redirect) {
      return (
        <div>
          Login
          <div>
            <form>
              <label>
                  Username:
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <label>
                  Password:
                <input type="text" name="pw" onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Redirect to="/trivia" />
      </div>
    );
  }
}
export default Login;
