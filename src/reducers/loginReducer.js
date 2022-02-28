import { TYPES } from "../actions/types";
import { removeItem } from "../utils/localStorage";
const initialState = {
  token: "",
  isLogin: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        token: action.payload,
        isLogin: true,
      };
    case TYPES.LOGOUT:
      removeItem("token");
      return {
        ...state,
        token: "",
        isLogin: false,
      };
    case TYPES.GET_TOKKEN:
      return {
        ...state,
        token: action.payload,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default LoginReducer;
