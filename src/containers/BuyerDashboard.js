import React, { Component } from 'react';

import CategoryChecklist from '../components/CategoryChecklist.js';
import CurrentStockBuyerView from '../components/CurrentStockBuyerView.js';


class Dashboard  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: false,
      drygoods: false,
      produce: false,
      clothing: false,
      women: false,
      men: false,
      children: false,
      homegoods: false,
      cookware: false,
      dishes: false,
      electronics: false,
      communication: false,
      hvac: false,
      media: false,
      tools: false,
      construction: false,
      handFarming: false,
      farmTools: false,
      distance: '5',
      userLocation: [],
      surveyCompleted: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  updateSurvey = (event) => {
    this.setState({
      surveyCompleted: 1
    })
  }

  componentDidMount() {
    this.fetchLocation()
  }

  fetchLocation = () => {
    const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBLmiBCjvCxtfw0e8f86v0FyPkVBqKwpvQ'
      fetch(url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(res => this.setState({userLocation: res.location}))
        }

  render() {
    if (!!this.state.userLocation) {
      localStorage.setItem('location', JSON.stringify(this.state.userLocation))
    }
    if (this.state.surveyCompleted === 1) {
      return (
        <div>
          <CurrentStockBuyerView distance={this.state.distance} props={this.state}/>
        </ div>
      )
  } else {
    return (
      <div>
        <CategoryChecklist props={this.state} updateSurvey={this.updateSurvey} handleInputChange={this.handleInputChange} fetchLocation={this.fetchLocation}/>
      </ div>
    )
  }
}
}

export default Dashboard;
