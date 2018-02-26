import React, { Component } from 'react';
import { UsersList } from './UsersList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {

    fetch(`https://api.github.com/search/users?q=${e.target.value}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data.items });
      });
  }

  render() {
    return (
      <div className="app">
        <h1>GitHub search</h1>

        <input type="text" onChange={this.handleChange} />

        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
