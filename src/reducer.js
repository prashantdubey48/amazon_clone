import { act } from "react-dom/test-utils";

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log("action===>", action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      //logic for add tocart
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_CART":
      // logic for removing from cart

      // cloned the basket
      let newBasket = [...state.basket];
      console.log("newbasket", newBasket);
      console.log("newbasket1===", state.basket);

      let index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      console.log("index", index);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
      }
      return {
        ...state,
        basket: newBasket,
      };

      break;
    default:
      return state;
  }
};

export default reducer;
