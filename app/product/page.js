import { Suspense } from "react";
import CustomTable from "../../components/Table/CustomTable";

async function getProducts() {
  const res = await fetch(`https://dummyjson.com/products`, { cache: "no-store" });
  const products = await res.json();

  return products;
}

const Product = async () => {
  const products = await getProducts();
  console.log("products", products);

  return (
    <div>
      <h3>Products</h3>
      <Suspense fallback={<p>Loading products...</p>}>
        
        <CustomTable productData={products.products} />
      </Suspense>
    </div>
  );
};

export default Product;
