import React from 'react'
import Good from '../components/Good.js'


class StockistInvetory extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUserData: []
    }
  }

    componentWillMount() {
    		fetch('http://localhost:3000/api/v1/getUser')
    		.then(res => res.json())
    		.then(res => this.setState({
    			currentUserData: res
    		}))
    	}

  render() {
    if(!!this.state.myGoods){
      return(<div>
        <h4>It looks like you have no inventory. Update your interest list to notify buyers of what you would like to have in stock.</h4>
        </div>)
    } else {
    	  // const inventoryList = this.state.myGoods.map((good, index) =>
    	  // 	<Good key={index} name={good.name} description={good.description} id={good.id} price={good.currentPrice} availability={good.availability}/>)
        // return(
        //     <div className="inventory-list">
        //       {inventoryList}
        //     </div>
        // )
        console.log(this.state)
        return (
          <div>
          testing
          </div>
        )
    }
}
}

export default StockistInvetory;
