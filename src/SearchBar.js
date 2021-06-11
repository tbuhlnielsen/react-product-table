const SearchBar = (props) => {

  const handleFilterTextChange = (event) => {
    props.onFilterTextChange(event.target.value);
  }

  const handleInStockOnlyChange = (event) => {
    props.onInStockOnlyChange(event.target.checked);
  }

  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}/>
      <input
        name="stockFilter"
        type="checkbox"
        checked={inStockOnly}
        onChange={handleInStockOnlyChange}/>
      <label htmlFor="stockFilter">Only show products in stock</label>
    </form>
  );
}

export default SearchBar;
