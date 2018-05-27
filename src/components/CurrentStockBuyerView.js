
import React from 'react';
import PickupLocation from '../containers/PickupLocation.js'

class CurrentStockBuyerView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      localPickupLocations: []
    }
  }

  componentDidMount() {
    this.fetchNearbyGoods()
  }

  fetchNearbyGoods = () => {
    console.log('fetching')
    fetch('http://localhost:3000/api/v1/goods/locations', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(res => this.setState({
      localPickupLocations: res
    }))
  }


  render() {
    if(this.state.localPickupLocations.length === 0){
      return(<div>
        <h4>It looks like there are no locations near you offering those goods. You can see all locations near you, or try searching again.</h4>
        </div>)
    } else {
      console.log("PickupLocation", this.state.localPickupLocations)
    	  const locationList = this.state.localPickupLocations.map((location, index) =>
    	  	<PickupLocation key={index} latitude={location.latitude} longitude={location.longitude} id={location.id} goods={location.allGoods} />)
        return(
            <div className="location-list">
              {locationList}
            </div>
        )
    }
  }
}


export default CurrentStockBuyerView;
