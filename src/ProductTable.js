import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {

  let categories = [
    ...new Set(props.products.map(product => product.category))
  ];

  const rows = [];
  for (let cat of categories) {
    const filteredProducts = props.products.filter(product =>
      product.category === cat
      && product.name.includes(props.filterText)
      && (product.stocked || !props.inStockOnly)
    );
    if (filteredProducts.length > 0) {
      rows.push(
        <ProductCategoryRow
          key={cat}
          category={cat} />
      );
    }
    for (let product of filteredProducts) {
      rows.push(
        <ProductRow
          key={product.name}
          name={product.name}
          price={product.price} />
      );
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default ProductTable;
