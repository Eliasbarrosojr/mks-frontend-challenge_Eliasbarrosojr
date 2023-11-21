import axios from "axios";

const Api = axios.create({
  baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
  timeout: 5000,
});

export default Api;
