import FilterableProductTable from "./FilterableProductTable";

const App = (props) => {
  return (
    <FilterableProductTable products={props.products} />
  );
}

export default App;
