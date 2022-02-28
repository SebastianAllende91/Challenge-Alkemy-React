import { TYPES } from "./types";
import { saveValue } from "../utils/localStorage";
export const login = (payload, rememberMe) => {
  if (rememberMe) {
    saveValue("token", payload);
  }
  return {
    type: TYPES.LOGIN,
    payload,
  };
};

export const logout = () => ({
  type: TYPES.LOGOUT,
});

export const setToken = (tokken) => {
  return {
    type: TYPES.GET_TOKKEN,
    payload: tokken,
  };
};
