import React from "react";
import styles from "styles/products.module.css";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div>
      <h3>Products</h3>
      <div>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <Link href={`/products/${product.id}`}>
              <p>title: {product.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// incremental static regeneration (ISR)
export const getStaticProps = async () => {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};

export default Products;
