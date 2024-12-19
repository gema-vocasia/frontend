import { jwtDecode } from "jwt-decode";

export const saveAccessToken = (token) => {
  localStorage.setItem("accessToken", token);
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

export const removeSnapToken = () => {
  localStorage.removeItem("donation");
};

export const decodeToken = (token) => {
  return jwtDecode(token);
};
