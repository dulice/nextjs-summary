import React from 'react'

const Detail = ({news, category}) => {
  return (
    <div>
        <h3>Show news for category "{category}"</h3>
        {news.map(article => (
            <div key={article.id}>
                <p>{article.title}</p>
                <p>category: {article.category}</p>
                <p>description: {article.description}</p>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default Detail

export const getServerSideProps = async (context) => {
    const { params, query, req, res } = context;
    const { category } = params;
    const response = await fetch(`http://localhost:4000/news?category=${params.category}`);
    const data = await response.json();
    res.setHeader('Set-Cookie', ['name=Dulice']);
    // console.log(req.headers.cookie);
    // console.log(query);
    return {
        props: {
            news: data,
            category
        }
    }
}