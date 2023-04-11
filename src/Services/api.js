import axios from "axios";

const starwars = axios.create({
  baseURL: `https://swapi.dev/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default starwars;
