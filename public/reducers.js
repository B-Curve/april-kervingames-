const initialState = {
  counter: 0
};

function getZero(blah){
  if(blah.counter == 0){
    return null
  }else{
    return {counter: blah.counter - 1}
  }
}

function counterApp(state, action){
  if(typeof state === 'undefined'){
    return initialState;
  }

  switch(action.type){
    case "Add":
      return Object.assign({}, state, { counter: state.counter + 1 });
    case "Minus":
      return Object.assign({}, state, getZero(state));
    case "squared":
      return Object.assign({}, state, { counter: state.counter * state.counter});
    case "reset":
      return Object.assign({}, state, { counter: 0});
    default:
      return state;
  }
}

export default counterApp;
