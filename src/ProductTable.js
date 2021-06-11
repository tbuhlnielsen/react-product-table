import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {

  let categories = [
    ...new Set(props.products.map(product => product.category))
  ];

  const rows = [];
  for (let cat of categories) {
    rows.push(
      <ProductCategoryRow
        key={cat}
        category={cat} />
    );
    const products = props.products.filter(product => product.category === cat)
    for (let product of products) {
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
