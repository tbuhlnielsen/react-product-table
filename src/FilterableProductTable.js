import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable(props) {
  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default FilterableProductTable;
