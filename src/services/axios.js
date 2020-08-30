import axios from "axios";

const instance = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1/",
});

export default instance;
