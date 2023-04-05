import axios from "axios";

const instance = axios.create({
  baseURL: "https://belowater-api.vercel.app",
  // baseURL: "http://localhost:3008",
  timeout: 100000,
});

export const getMarineAnimals = (params) => {
  return instance.get("/marine_animals", { params });
};

export const getPlastics = (params) => {
  return instance.get("/plastics_game", { params });
};
