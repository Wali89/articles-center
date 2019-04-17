import jwt_decode from 'jwt-decode';

function handleAPIErrors(res) {
    // this is needed to catch 404, 500 errors, etc.
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

export function getUserPreferences( id) {
    return (dispatch) => {
        let token = localStorage.getItem("jwt");                     
        return fetch(`/api/users/${id}`, 
                    { headers: new Headers({
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json'
                    })})
            .then(res => handleAPIErrors(res))                            
            .then(res => res.json())
            .then(res =>{
                dispatch({type: "SET_USER_PREFERENCES", payload:res})}) 
            .catch(function(error) {
                console.log(error);
            })                     
    };
}


export function updateUserPreferences(id,preferences) {
    return (dispatch) => {
        let token = localStorage.getItem("jwt");
        const options = {
            method: 'PATCH',
            body: JSON.stringify(preferences),
            headers: new Headers({
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            })
        };
        fetch(`/api/users/${id}`, options)
            .then(res => handleAPIErrors(res))         
            .then(res => res.json())
            .then(res => dispatch({type: "UPDATE_USER_PREFERENCES", payload:res}))
            .catch(function(error) {
                console.log(error);
            }) ;
    }
};

export function loggingOut() {
    return {
        type: 'LOGGING_OUT'
    };
  }
export function logoutUser() {
    return (dispatch) => {
        dispatch(loggingOut());

        const token = localStorage.getItem("jwt");
        const options = {
            method: 'POST',
            headers: new Headers({
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            })
        };           
        fetch("/api/invalidate_token", options)
            .then(res => handleAPIErrors(res))         
            .then(res => {
                localStorage.setItem("jwt", "");
                dispatch({type: "LOGOUT_USER", payload:res})
            }).catch(function(error) {
                console.log(error);
            });         
    }        
}
 
export function signUpUser(credentials,history) {
    return (dispatch) => {
        dispatch(setUserMessage("Signing up..."));

        const email = credentials.email;
        const password = credentials.password;
  
        const request = {user: {"email": email, "password": password}}
        const options = {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
              'Content-Type': 'application/json'
            }
        };
        fetch("api/users", options)
            .then(res => handleAPIErrors(res))         
            .then(res => res.json())
            .then(res => {
                dispatch(loginUser(credentials))               
            })
            .catch(function(error) {
                console.log("Signup Error", error);
                dispatch(setUserMessage(`Sign Up ${error}`));                
            }); 
    };
}