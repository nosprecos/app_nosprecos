import axios from "axios"

const api = axios.create({
  //LUAN
  baseURL:"http://192.168.1.64:3333",

  //ARIEL
  //baseURL: "http://192.168.1.153:3333",

  //GESIO
  //baseURL: "http://192.168.100.102:3333",
})
export const config = "http://192.168.100.102:3333"
export default api