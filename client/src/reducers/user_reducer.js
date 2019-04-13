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

      
    }
  }