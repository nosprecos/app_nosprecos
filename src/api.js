import axios from "axios"

const api = axios.create({
  //Jardim de Piranhas
  /* baseURL: "http://10.0.0.117:8080", */

  //Natal
  baseURL: "http://192.168.100.102:3333",
})

export default api