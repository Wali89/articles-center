function handleAPIErrors(res) {
  
  if (!res.ok) {
      throw Error(res.statusText);
  }
  return res;   
}

export function setUserMessage(msg) {
  return {
      type: 'SET_USER_MESSAGE',
      payload: msg
  };
}

export function loginUser(credentials) {
  return (dispatch) => {
      dispatch(setUserMessage("Logging in..."));

      const request = {"auth": {"email": credentials.email, "password": credentials.password}}
      const options = {
          method: 'POST',
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json'
          }
      };
      //console.log("Login User!",request);
      fetch("api/user_token", options)
          .then(res => handleAPIErrors(res))        
          .then(res => res.json())
          .then(res => {
              localStorage.setItem("jwt", res.jwt); // TODO: move to reducer?
              let id = jwt_decode(res.jwt).sub;                
              dispatch({type:"LOGIN_USER", token:res.jwt, id: id})
              dispatch(getUserPreferences(id))               
          })
          .catch(function(error) {
              console.log("Login Error",error);
              dispatch(setUserMessage(`Login ${error}`));
          });             
  };
}