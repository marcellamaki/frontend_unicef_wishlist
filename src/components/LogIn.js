import React from 'react'

import SellerDashboard from '../containers/SellerDashboard'
import StockistDashboard from '../containers/StockistDashboard'

class LogIn extends React.Component {

	//need event listener for form submission
	constructor() {
		super()

		this.state = {
			name: '',
			email: '',
			password: '',
			role: '',
			loggedIn: 0
		}

	}

	handleChange = (event) => {
		const target = event.target.dataset.name
		const value = event.target.value

		this.setState({
			[target]: value
		})
	}

	updateRadio = (event) => {
		this.setState ({
			role: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)

		const data = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			role: this.state.selectedRadio
		}

		fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			body: JSON.stringify({data}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json())
		.then(res => this.setState({
			loggedIn: 1
		}))
	}


	render(){
		if (!this.state.loggedIn) {
		return(
        <form onSubmit={this.handleSubmit}>
              <label>Name  </label>
                <input type="text" data-name="name" placeholder="Name" onChange={this.handleChange} required/>
              <br /><br />
              <label>Email  </label>
                <input type="text" data-name="email" placeholder="Email" onChange={this.handleChange} required/>
              <br /><br />
              <label>Password  </label>
                <input type="password" data-name="password" placeholder="Password" onChange={this.handleChange} required/>
              <br /><br />
              <br /><br />
              <label>
                <input type="radio" name="role" value="seller" onChange={this.updateRadio} checked={this.state.role === 'seller'} required="true"/>
                I am a seller looking for drop-off locations
              </label>
              <br /><br />
              <label>
                <input type="radio" name="role" value="stockist" onChange={this.updateRadio} checked={this.state.role === 'stockist'} />
                I stock goods and I want to know what items are popular near me
              </label>
              <br /><br />
           <button className="ui button" name="submit">Submit</button>
        </form>
		)
  } else if (this.state.loggedIn && this.state.role === 'seller') {
      return (
        <SellerDashboard />
      )
    } else if (this.state.loggedIn && this.state.role === 'stockist') {
      return(
        <StockistDashboard />
      )
    }
	}

}

export default LogIn
