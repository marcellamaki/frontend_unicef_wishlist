import React, { Component } from 'react';

import CategoryChecklist from '../components/CategoryChecklist.js';
import CurrentStockBuyerView from '../components/CurrentStockBuyerView.js';


class Dashboard  extends Component {
  constructor() {
    super()
    this.state = {
      surveyCompleted: 0,
      locations: {},
      userLocation: {}
    }
  }

  updateSurvey = (event) => {
    this.setState({
      surveyCompleted: 1
    })
  }

  fetchLocation () {
    const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBLmiBCjvCxtfw0e8f86v0FyPkVBqKwpvQ'
      fetch(url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }

  render() {
    if (this.state.surveyCompleted) {
    return (
      <div>
        <CurrentStockBuyerView locations={this.state.locations}/>
      </ div>
    )
  } else {
    return (
      <div>
        <CategoryChecklist updateSurvey={this.updateSurvey} fetchLocation={this.fetchLocation}/>
      </ div>
    )
  }
}
}

export default Dashboard;
