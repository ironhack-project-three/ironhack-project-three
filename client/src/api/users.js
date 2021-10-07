const axios = require("axios");
export class Users {

  constructor(baseURL) { //baseUrl could be overwritten in the route that uses the API
    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000"
    this.baseURL = `${baseUrl}/users` 
    this.api = axios.create(
      {
        baseURL: this.baseURL
      }
    )

  }

  // // CHANGE THE PATHS ACCORDING TO API DOCUMENTATION
  getAll = () => this.api.get("/all-users");
  getOne = (id) => this.api.get(`/user/${id}`);
  //   search = (query)=> this.api.get(`/search/?q=${query}`)
  createOne = (newEntityValues, storedToken) =>
    this.api.post("/create-user", newEntityValues, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
  login = (newEntityValues, storedToken) =>
    this.api.post("/login", newEntityValues, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
  verifyToken = (storedToken) =>
    this.api.get("/verify", {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
  // deleteOne = (id)=> this.api.delete(`/${id}`)
  // updateOne = (id)=> this.api.put(`/${id}`)
  // // etc...
}
