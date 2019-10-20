export default function userReducer(
  state = {
    isLoggedIn:false,
    statusMessage: "",
    newsSources: []
  },
  action)

  {
    switch(action.type) {

      case "LOGIN_USER":
        return {...state, statusMessage:"", jwt: action.token, id: action.id}

      case "SET_USER_PREFERENCES":
        return {...state, isLoggedIn:true, newsSources:action.payload.news_sources}

      case "UPDATE_USER_PREFERENCES":
        return {...state, newSources: action.payload.news_sources}

      case "LOGGING_OUT":
        return {...state, jwt: null, id: 0, isLoggedIn: false}

      case "SET_USER_MESSAGE":
        return {...state, statusMessage: action.payload}

      default:
        return state;
      
    }
  }