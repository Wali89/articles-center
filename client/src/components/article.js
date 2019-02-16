import React from 'react';


const Article = (props) => {
  
  return(
    <div className="article">

      <h3> <a className="article-link" href={props.url} target="_blank" rel="noopener noreferrer"> {props.title}</a>  </h3>

      <p className="article-description"> {props.description} </p>

    </div>
  )
}


export default Article;