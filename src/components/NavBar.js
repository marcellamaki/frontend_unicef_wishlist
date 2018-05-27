import React, { Component } from 'react';

class NavBar  extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: 0,
      seller: 0,
      stockist: 0
    }
  }

  render() {
    if (this.state.loggedIn) {
    return (
      <div>
        <h2>My Dashboard</h2>
      </ div>
    )
  } else {
    return (
      <div>
        <h2>Find Goods Near You</h2>
      </ div>
    )
  }
}
}

export default NavBar;
