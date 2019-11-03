export default function articlesReducer (
  state = {
    loading: false,
    topStories: [],
    channels: [],
    channelArticles: [],
    searches: [],
    results: [],
    numresults: false,
    query: '',
    searchDone: false
  },
  action
) 
{
  console.log(action);
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_TOP_STORIES':
      return {...state, loading: false, topStories: action.payload.articles}

    case 'FETCH_CHANNELS':
      return {...state, loading: false, channels: action.payload.sources}

    case 'FETCH_CHANNEL_ARTICLES':
      return {...state, loading: false, channelArticles: action.payload.articles}

    case 'HANDLE_SEARCH_ERROR':
      return {...state, loading: false, results: [], numResults: action.payload.totalResults, searchDone: true}    
      
    case 'SAVE_SEARCH_QUERY':
      return {...state, loading: false, query: action.payload}

    case 'FETCH_FILTERED_ARTICLES':
      return {...state, loading: false, results: action.payload.articles, numResults: action.payload.totalResults, searchDone: true}

    case 'FETCHING_SEARCHES':
      return {...state, loading: true}

    case 'FETCH_RECENT_SEARCHES':
      return {...state, loading: false, searches: action.payload}
    

    default:
      return state;

  }
}

