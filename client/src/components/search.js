import React, { Component } from 'react';
import ReactDOM from "react-dom";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes,
    id: props.id,
    query: props.query,
    };
  
    
  }
  
  handleCounter = (e) => {
    const newCount = this.state.likes + 1
    this.setState({
       likes: newCount
    })
    return fetch(`http://localhost:3001/api/searches/${(this.state.id)}`, {
      method: 'POST',
      headers: {
        accept: 'application/json'
      },
    })
    

  }


  render() {
    
    return(
    
    <div>
      <p> Likes: {this.state.likes} </p>  <button data-id={this.state.id} onClick={ event => this.handleCounter(event) }> Like  </button>
    </div>
     
    )
  }
}


export default Search;