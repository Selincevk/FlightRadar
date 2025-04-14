import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "c1ae8c9daemshbbb350dcd462af5p17bc71jsn826e5eef15f4",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;
