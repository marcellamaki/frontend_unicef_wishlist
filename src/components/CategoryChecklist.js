import React from 'react';

class CategoryChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: 0,
      drygoods: 0,
      produce: 0,
      clothing: 0,
      women: 0,
      men: 0,
      children: 0,
      homegoods: 0,
      cookware: 0,
      dishes: 0,
      electronics: 0,
      communication: 0,
      hvac: 0,
      media: 0,
      tools: 0,
      construction: 0,
      handFarming: 0,
      farmTools: 0,
      distance: 5

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


  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submitting')
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
          checked={this.state.food}
          onChange={this.handleInputChange} />
          FOOD
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="drygoods"
          type="checkbox"
          checked={this.state.drygoods}
          onChange={this.handleInputChange} />
          Dry goods or Pantry Items
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="produce"
          type="checkbox"
          checked={this.state.produce}
          onChange={this.handleInputChange} />
          Fresh Fruits or Vegetables
        </label>
        <br />
        <label className="category-title">
        <input
          name="clothing"
          type="checkbox"
          checked={this.state.clothing}
          onChange={this.handleInputChange} />
          CLOTHING
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="women"
          type="checkbox"
          checked={this.state.women}
          onChange={this.handleInputChange} />
          Women
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="men"
          type="checkbox"
          checked={this.state.men}
          onChange={this.handleInputChange} />
          Men
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="children"
          type="checkbox"
          checked={this.state.children}
          onChange={this.handleInputChange} />
          Children
        </label>
        <br />
        <label className="category-title">
        <input
          name="homegoods"
          type="checkbox"
          checked={this.state.homegoods}
          onChange={this.handleInputChange} />
          HOME GOODS
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="cookware"
          type="checkbox"
          checked={this.state.cookware}
          onChange={this.handleInputChange} />
          Cookware, Pots and Pans
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="dishes"
          type="checkbox"
          checked={this.state.dishes}
          onChange={this.handleInputChange} />
          Dishes, Dinnerware, and Utensils
        </label>
        <br />
        <label className="category-title">
        <input
          name="electronics"
          type="checkbox"
          checked={this.state.electronics}
          onChange={this.handleInputChange} />
          ELECTRONICS
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="communication"
          type="checkbox"
          checked={this.state.communication}
          onChange={this.handleInputChange} />
          Computers, Cellular Phones
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="hvac"
          type="checkbox"
          checked={this.state.hvac}
          onChange={this.handleInputChange} />
          Heaters, Fans, Air Conditioners
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="media"
          type="checkbox"
          checked={this.state.media}
          onChange={this.handleInputChange} />
          Televisions, Radios, CD Players
        </label>
        <br />
        <label className="category-title">
        <input
          name="tools"
          type="checkbox"
          checked={this.state.tools}
          onChange={this.handleInputChange} />
          TOOLS, EQUIPMENT, AND FARMING SUPPLIES
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="construction"
          type="checkbox"
          checked={this.state.construction}
          onChange={this.handleInputChange} />
          Construction Tools, Hammers, Saws, Drills
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="handFarming"
          type="checkbox"
          checked={this.state.handFarming}
          onChange={this.handleInputChange} />
          Hand Farming Tools, Shovels, Trowels, Hoes, Rakes, Hoses
        </label>
        <br />
        <label className="checklist-subcategory">
        <input
          name="farmTools"
          type="checkbox"
          checked={this.state.farmTools}
          onChange={this.handleInputChange} />
          Large Farming Equipment, Plows, Irrigation Systems, Seeders
        </label>
        <br />
        <br />
        <label>
        I am looking for goods within:
        <select name="distance" value={this.state.value} onChange={this.handleChange}>
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
