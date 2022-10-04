import { createStore } from "redux";
import data from "../utils/cart-item";

const initialState = {
  cart: data,
  total: 0,
  amount: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR":
      return { cart: [] };

    // to get total sum and total amount
    case "GET_TOTAL_AMOUNT": {
      let { total, amount } = state.cart.reduce(
        (sum, currItem) => {
          sum.amount += currItem.amount;
          sum.total += currItem.price * currItem.amount;
          return sum;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        total,
        amount,
      };
    }

    // to remove a product from our cart
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    // toggle to increase and decrease quantity of items in our cart
    case "TOGGLE": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                amount:
                  action.payload.type === "inc"
                    ? item.amount + 1
                    : item.amount - 1,
              }
            : item;
        }),
      };
    }

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
