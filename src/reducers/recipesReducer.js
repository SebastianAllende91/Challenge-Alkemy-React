import { TYPES } from "../actions/types";

const initialState = {
  loading: true,
  recipes: [],
  recipeSelect: {},
  recipesSearch: [],
  myMenu: [],
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case TYPES.GET_RECIPE_SELECT:
      return {
        ...state,
        recipeSelect: action.payload,
        loading: false,
      };
    case TYPES.GET_RECIPES_SEARCH:
      return {
        ...state,
        recipesSearch: action.payload,
        loading: false,
      };
    case TYPES.ADD_TO_MENU: {
      return {
        ...state,
        myMenu: action.payload,
      };
    }

    case TYPES.REMOVE_ONE_FROM_MENU: {
      let itemToDelete = state.myMenu.find(
        (item) => item.id === action.payload
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            myMenu: state.myMenu.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            myMenu: state.myMenu.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.CLEAR_MENU:
      return {
        ...state,
        myMenu: [],
      };
    default:
      return state;
  }
};
export default RecipesReducer;
