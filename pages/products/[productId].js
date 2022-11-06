import { useRouter } from "next/router";
import React from "react";

const Product = ({ product }) => {
    const router = useRouter();

    if(router.isFallback) {
        return <div>Loading...</div>
    }
  return (
    <div>
        <p>title: {product.title}</p>
        <p>price: {product.price}</p>
        <p>description: {product.description}</p>
    </div>
  );
};
export default Product;

export const getStaticPaths = () => {
    return {
        paths: [{params: {productId: '1'}}],
        fallback: true,
    }
}

// incremental static regeneration (ISR)
export const getStaticProps = async (context) => {
    const { params } = context;
  const response = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await response.json();
  if(!data.id) {
    return {
        notFound: true,
    }
  }

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};