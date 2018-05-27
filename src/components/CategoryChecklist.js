import React from 'react';

class CategoryChecklist extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateSurvey()
    this.props.fetchLocation()
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <h4> Select all that apply </h4>
        <label className="category-title">
        <input
          name="food"
          type="checkbox"
          checked={this.props.food}
          onChange={this.props.handleInputChange} />
          FOOD
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="drygoods"
          type="checkbox"
          checked={this.props.drygoods}
          onChange={this.props.handleInputChange} />
          Dry goods or Pantry Items
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="produce"
          type="checkbox"
          checked={this.props.produce}
          onChange={this.props.handleInputChange} />
          Fresh Fruits or Vegetables
        </label>
        <br />
        <label className="category-title">
        <input
          name="clothing"
          type="checkbox"
          checked={this.props.clothing}
          onChange={this.props.handleInputChange} />
          CLOTHING
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="women"
          type="checkbox"
          checked={this.props.women}
          onChange={this.props.handleInputChange} />
          Women
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="men"
          type="checkbox"
          checked={this.props.men}
          onChange={this.props.handleInputChange} />
          Men
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="children"
          type="checkbox"
          checked={this.props.children}
          onChange={this.props.handleInputChange} />
          Children
        </label>
        <br />
        <label className="category-title">
        <input
          name="homegoods"
          type="checkbox"
          checked={this.props.homegoods}
          onChange={this.props.handleInputChange} />
          HOME GOODS
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="cookware"
          type="checkbox"
          checked={this.props.cookware}
          onChange={this.props.handleInputChange} />
          Cookware, Pots and Pans
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="dishes"
          type="checkbox"
          checked={this.props.dishes}
          onChange={this.props.handleInputChange} />
          Dishes, Dinnerware, and Utensils
        </label>
        <br />
        <label className="category-title">
        <input
          name="electronics"
          type="checkbox"
          checked={this.props.electronics}
          onChange={this.props.handleInputChange} />
          ELECTRONICS
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="communication"
          type="checkbox"
          checked={this.props.communication}
          onChange={this.props.handleInputChange} />
          Computers, Cellular Phones
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="hvac"
          type="checkbox"
          checked={this.props.hvac}
          onChange={this.props.handleInputChange} />
          Heaters, Fans, Air Conditioners
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="media"
          type="checkbox"
          checked={this.props.media}
          onChange={this.props.handleInputChange} />
          Televisions, Radios, CD Players
        </label>
        <br />
        <label className="category-title">
        <input
          name="tools"
          type="checkbox"
          checked={this.props.tools}
          onChange={this.props.handleInputChange} />
          TOOLS, EQUIPMENT, AND FARMING SUPPLIES
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="construction"
          type="checkbox"
          checked={this.props.construction}
          onChange={this.props.handleInputChange} />
          Construction Tools, Hammers, Saws, Drills
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="handFarming"
          type="checkbox"
          checked={this.props.handFarming}
          onChange={this.props.handleInputChange} />
          Hand Farming Tools, Shovels, Trowels, Hoes, Rakes, Hoses
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="farmTools"
          type="checkbox"
          checked={this.props.farmTools}
          onChange={this.props.handleInputChange} />
          Large Farming Equipment, Plows, Irrigation Systems, Seeders
        </label>
        <br />
        <br />
        <label>
        I am looking for goods within:
        <select name="distance" value={this.props.value} onChange={this.props.handleInputChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50+</option>
          </select>
          km
        </label>
        <br />
        <button type="submit">Use my location to find/request goods near me</button>
      </form>
    );
  }
}

export default CategoryChecklist;
