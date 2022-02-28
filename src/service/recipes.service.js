import { apiKey, apikey2 } from "../actions/types";
import http from "../helpers/axiosInstance";

const search = "complexSearch";

let getRecipes = (page = 0, limit = 30) => {
  return http.get(
    `/${search}?apiKey=${apiKey}&offset=${page * limit}&number=${limit}`
  );
};

const getRecipeById = (id) => {
  return http.get(`/${id}/information?apiKey=${apiKey}&includeNutrition=false`);
};

const getProductSearch = (query, page = 0, limit = 30) => {
  return http.get(
    `/${search}?apiKey=${apiKey}&query=${query}&offset=${
      page * limit
    }&number=${limit}`
  );
};

const RecipesService = {
  getRecipes,
  getRecipeById,
  getProductSearch,
};

export default RecipesService;
