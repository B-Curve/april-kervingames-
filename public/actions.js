/*
  # ACTION CREATORS #
*/
export function counterActions(command){
  if(command == "Add"){
    return {type: "Add"}
  }else if(command == "Minus"){
    return {type: "Minus"}
  }else if(command == "squared"){
    return {type: "squared"}
  }else if(command == "reset"){
    return {type: "reset"}
  }
}
