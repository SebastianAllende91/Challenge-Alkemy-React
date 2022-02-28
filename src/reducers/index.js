import { combineReducers } from "redux";
import RecipesReducer from "./recipesReducer";
import LoginReducer from './loginReducer'; 

const rootReducer = combineReducers({
  RecipesReducer,
  LoginReducer
});

export default rootReducer;
