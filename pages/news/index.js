import React from "react";
import styles from "styles/products.module.css";
import Link from "next/link";

const News = ({ news }) => {
  return (
    <div>
        <h3>News Article</h3>
        <div>
        {news.map((article) => (
          <div key={article.id} className={styles.product}>
            <Link href={`/news/${article.category}`}>
              <p>title: {article.title}</p>
              <p>category: {article.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News

export const getServerSideProps = async ( ) => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
        news: data,
    }
  }
}