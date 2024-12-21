import { ADD_PRODUCT } from "./constants.js";
import { DELETE_PRODUCT } from "./constants.js";

const initialState = {
  productId: [],
  cardItem: [],
};

export const productReducer = (state = initialState, action) => {
  console.log(state, "state");
  console.log(action, "action");
  console.log(ADD_PRODUCT, "ADD_PRODUCT");
  console.log(action.type == ADD_PRODUCT);
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, productId: [...state.productId, action.payload] };

    case DELETE_PRODUCT:
      return {
        ...state,
        productId: state.productId.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
};
