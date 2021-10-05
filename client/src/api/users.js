const axios = require("axios");
export class Users {
  constructor(baseURL) { //baseUrl could be overwritten in the route that uses the API
    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000"
    this.baseURL = `${baseUrl}/api/users` 
    this.api = axios.create(
      {
        baseURL: this.baseURL
      }
    )
  }

  // // CHANGE THE PATHS ACCORDING TO API DOCUMENTATION
  getAll = () => this.api.get("/all-users")
  getOne = (id)=> this.api.get(`/user/${id}`)
//   search = (query)=> this.api.get(`/search/?q=${query}`)
  // createOne = (newEntityValues)=>this.api.post("/", newEntityValues)
  // deleteOne = (id)=> this.api.delete(`/${id}`)
  // updateOne = (id)=> this.api.put(`/${id}`)
  // // etc...
}