import React from 'react';
import StockistInventory from '../components/StockistInventory.js';
import BuyerInterests from '../components/BuyerInterests.js';
import CategoryChecklist from '../components/CategoryChecklist.js';


const StockistDashboard = (props) => {
	return(
    <div>
    <h4>Current Inventory</h4>
			<StockistInventory />
    <h4>Buyer Interests</h4>
      <BuyerInterests />
    <h4>Update Stock Category Requests</h4>
      <CategoryChecklist />
    </div>
	)
}

export default StockistDashboard;
