

import React from 'react';
import ReactDOM from 'react-dom/client';

class Clifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "orange"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritefruit: "apple"})
    }, 3000)
  }
  render() {
    return (
      <h1>My Favorite fruit is {this.state.favoritefruit}</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clifecycle />);
export default Clifecycle;