import RecipesService from "../service/recipes.service";
import { TYPES } from "./types";

export const setLoading = () => {
  return {
    type: TYPES.SET_LOADING,
  };
};

export const getRecipes = (page) => async (dispatch) => {
  try {
    const { data } = await RecipesService.getRecipes(page);

    dispatch({
      type: TYPES.GET_RECIPES,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeGetById = (values) => async (dispatch) => {
  try {
    const { data } = await RecipesService.getRecipeById(values);

    dispatch({
      type: TYPES.GET_RECIPE_SELECT,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRecipesSearch = (values) => async (dispatch) => {
  try {
    const { data } = await RecipesService.getProductSearch(values);

    dispatch({
      type: TYPES.GET_RECIPES_SEARCH,
      payload: data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToMenu = (el) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.ADD_TO_MENU,
      payload: el,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromMenu = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.REMOVE_ONE_FROM_MENU,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const cleanMenu = () => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.CLEAR_MENU,
    });
  } catch (error) {
    console.log(error);
  }
};
