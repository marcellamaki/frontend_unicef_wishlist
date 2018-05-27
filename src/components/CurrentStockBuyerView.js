
import React from 'react';
import PickupLocation from '../containers/PickupLocation.js'

class CurrentStockBuyerView extends React.Component {
  constructor() {
    super()
    this.state = {
      localPickupLocations: []
    }
  }

    componentWillMount() {
    		fetch('http://localhost:3000/api/v1/locations')
    		.then(res => res.json())
    		.then(res => console.log(res))
    		}


  render() {
    if(this.state.allPickupLocations === undefined){
      return(<div>
        <h4>It looks like there are no locations near you offering those goods. You can see all locations near you, or try searching again.</h4>
        </div>)
    } else {
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
