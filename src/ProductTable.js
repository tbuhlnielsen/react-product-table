import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

// Returns an Array containing only the distinct entries of `array`.
const distinct = (array) => {
  return [...new Set(array)];
}

const ProductTable = (props) => {

  const products = props.products;

  // Filter the products by the user input.
  const filteredProducts = products.filter(product => {
    if (!product.name.includes(props.filterText)) {
      return false;
    }
    if (props.inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  });

  const categories = distinct(filteredProducts.map(p => p.category));

  // Create the rows to go in the product table.
  const rows = [];
  for (let category of categories) {
    // Group products by category.
    const productsInCategory = filteredProducts.filter(product =>
      product.category === category
    );
    if (productsInCategory.length > 0) {
      rows.push(
        <ProductCategoryRow
          key={category}
          category={category} />
      );
    }
    for (let product of productsInCategory) {
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
