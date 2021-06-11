import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.props.onFilterTextChange(event.target.value);
  }

  handleInStockOnlyChange(event) {
    this.props.onInStockOnlyChange(event.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}/>
        <input
          name="stockFilter"
          type="checkbox"
          checked={inStockOnly}
          onChange={this.handleInStockOnlyChange}/>
        <label htmlFor="stockFilter">Only show products in stock</label>
      </form>
    );
  }
}

export default SearchBar;
