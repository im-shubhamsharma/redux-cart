export function clear(){
    return{
        type: "CLEAR" 
    }
}

export function toggle(val) {
  return {
    type: "TOGGLE",
    payload: val
  };
}

export function remove(val) {
  return {
    type: "REMOVE",
    payload: val
  };
}

export function getTotalAmount(){
    return {
        type : "GET_TOTAL_AMOUNT"
    }
}