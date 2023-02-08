export const JuegoReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case "crear":
        newState = [...state, action.payload];
    break;  
    case "borrar":
      newState = state.filter(juego => juego.id !== action.payload);
    break; 
    case "editar":
      let indice = state.findIndex(juego => juego.id === action.payload.id);
      state[indice] = action.payload;
      newState = [...state];
    break;   
    default:
        newState = state;
  }

  return newState;
}
