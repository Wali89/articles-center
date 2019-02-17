import React from 'react';
import Article from './article'
import QueryInput from './queryInput';

const QueryArticles = (props) => {

  const renderSearch = () => {
    if (props.numResults > 0) {
      return(props.results.map((article, index) => <Article key={index} publishedDate={article.publishedAt} description={article.description} title={article.title} url={article.url} /> ))
    }
  }

  return(
    <div>
      {renderSearch()}
    </div>
  )
}


export default QueryArticles