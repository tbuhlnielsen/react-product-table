import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = (props) => {

  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (value) => {
    setFilterText(value);
  }

  const handleInStockOnlyChange = (checked) => {
    setInStockOnly(checked);
  }

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockOnlyChange={handleInStockOnlyChange}/>
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

export default FilterableProductTable;
