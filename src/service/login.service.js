import http from "../helpers/axiosInstance";

const login = (data) => {
  return http.post("http://challenge-react.alkemy.org", data);
};
const AuthService = {
  login,
};
export default AuthService;
