import React from "react";

class SearchBar extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText} />
        <input
          name="stockFilter"
          type="checkbox"
          checked={inStockOnly} />
        <label htmlFor="stockFilter">Only show products in stock</label>
      </form>
    );
  }
}

export default SearchBar;
