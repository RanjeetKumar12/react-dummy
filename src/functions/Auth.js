import axios from "axios";

const signUp = (user) => {
  return axios.post("/api/auth/signup", user);
};

const signIn = (user) => {
  return axios.post("/api/auth/login", user);
};

export { signUp, signIn }