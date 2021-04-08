import { get } from "axios";

const BASE_URL = "http://localhost:3000/";

export const getUsers = () => {
  return get(BASE_URL + "users");
};

export const getProperties = () => {
  return get(BASE_URL + "properties");
};
