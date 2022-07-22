import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <button>Thanks!</button>;
    } else {
      button = <button onClick={this.handleClick}>Click Me!</button >;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

const click = document.getElementById('root');
const root = ReactDOM.createRoot(click);
root.render(<CustomButton />);
