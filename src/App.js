import FilterableProductTable from "./FilterableProductTable";

function App(props) {
  return (
    <FilterableProductTable products={props.products} />
  );
}

export default App;
