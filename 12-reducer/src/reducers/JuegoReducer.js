export const JuegoReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case "crear":
        newState = [...state, action.payload];
    break;  
    case "borrar":
      newState = action.payload;
    break;  
    default:
        newState = state;
  }

  return newState;
}
