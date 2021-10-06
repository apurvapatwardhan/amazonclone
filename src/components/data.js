const initialState = {
  basket: [],
  user: "Sign In",
  idToken: null,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        basket: [
          ...prevState.basket,
          {
            ...action.item,
          },
        ],
        user: prevState.user,
        idToken: prevState.idToken,
      };
    case "REMOVE_FROM_BASKET":
      let index = [...prevState.basket].findIndex(
        (item) => item.id === action.item.id
      );
      const newBasket = [...prevState.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("No such product is present in basket");
      }
      return {
        basket: newBasket,
        user: prevState.user,
        idToken: prevState.idToken,
      };
    case "LOGIN":
      return { ...prevState, user: action.user, idToken: action.idToken };
    case "LOGOUT":
      return { ...prevState, user: action.user, idToken: action.idToken };
    default:
      return prevState;
  }
};

export { initialState, reducer };
