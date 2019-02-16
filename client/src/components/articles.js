import React from 'react';
import Article from './article';

const Articles =(props) => {

  const renderArticles = () => {
    return (props.articles.map((article, index) => <Article key={index} description={article.description} title={article.title} url={article.url} />))
  }

  return(
    <div id="articles">
    {renderArticles()}
    </div>
  )
}

export default Articles