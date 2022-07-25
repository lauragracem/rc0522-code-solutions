import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username
          <input onChange={this.handleUsernameChange} value={this.state.username} />
        </label>
        <label>
          Password
          <input onChange={this.handlePasswordChange} value={this.state.password} />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

const root = document.querySelector('#root');
const form = ReactDOM.createRoot(root);
form.render(<RegistrationForm/>);
