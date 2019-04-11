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