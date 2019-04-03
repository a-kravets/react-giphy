import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(prors) {
    super(prors);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => { //with equal and fat arrow we bound the instance
    this.setState({     //triggers render automatically
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : null} onClick={this.handleClick}>
        Hello, { this.props.name} {this.state.counter}
      </div>
      )
  }

}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
