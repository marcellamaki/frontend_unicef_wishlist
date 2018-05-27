import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (props) => {
  return (
        <div>
          <h3>Welcome to Wishlist, a part of LocalMarkets.</h3>
          <p>Wishlist allows buyers, sellers, and stockist to communicate with each other about the most in-demand goods and find convenient locations to buy and sell.
          <br />
          <br />
          If you are a seller or stockist, please <Link to="/login" className="textLink">sign in</Link> here to view your dashboard</p>
          <p>Otherwise, you can <Link to="/browse" className="textLink">browse</Link> goods for sale without logging in</p>
        </div>
      )
}

export default Landing;
