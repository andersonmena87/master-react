export const JuegoReducer = (state = [], action) => {
  switch (action.type) {
    case "crear":
        return [...state, action.payload];
    break;  
    case "borrar":
    
    break;
    default:
        return state;
    break;
  }
}
