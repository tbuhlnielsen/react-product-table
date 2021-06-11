function SearchBar(props) {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <input name="stockFilter" type="checkbox" />
      <label htmlFor="stockFilter">Only show products in stock</label>
    </form>
  );
}

export default SearchBar;
