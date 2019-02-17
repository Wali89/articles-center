//Get the top stories from API for top stories page
export function fetchTopStories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/topStories')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_TOP_STORIES', payload: articles}))
    
  }
}


//Get channels from API for the browse channels page
export function fetchChannels() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/channels')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_CHANNELS', payload: articles}))
  }
}


//Gets the articles for specified channel
export function searchChannelArticles(channel) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch(`/api/channels/${channel}`)
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_CHANNEL_ARTICLES', payload: articles}))
  }
}


//Posts search to Rails API and returns results
export function searchArticles(query) {
  console.log('C')
  return (dispatch)  => {
    dispatch({type: 'SAVE_SEARCH_QUERY', payload: query})
    return fetch('/api/articles_search', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({articles: {query: query}})
    })
    .then(response => {
      if (!response.ok) {
        throw new Error()
      }
      return response.json()
    })
    .then(articles =>{
      
      dispatch({type: 'FETCH_FILTERED_ARTICLES', payload: articles})})
    .catch(error => dispatch({type: 'HANDLE_SEARCH_ERROR', payload: error}))
  }
  
}

export function getSearches() {
  return (dispatch) => {
    dispatch({type: 'FETCHING_SEARCHES'});
    return fetch('/api/searches')
      .then(response => response.json())
      .then(searches => dispatch({type: 'FETCH_RECENT_SEARCHES', payload: searches}))
  }
}
