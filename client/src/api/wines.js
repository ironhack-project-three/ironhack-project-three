const axios = require("axios");
export class Wines {
  constructor(baseURL) { //baseUrl could be overwritten in the route that uses the API
    this.baseURL = process.env.API_URL || "http://localhost:3000/wines" 
    this.api = axios.create(
      {
        baseURL: this.baseURL
      }
    )
  }

  // // CHANGE THE PATHS ACCORDING TO API DOCUMENTATION
  getAll = () => this.api.get("/all-wine")
  getOne = (id)=> this.api.get(`/wine/${id}`)
  // createOne = (newEntityValues)=>this.api.post("/", newEntityValues)
  // deleteOne = (id)=> this.api.delete(`/${id}`)
  // updateOne = (id)=> this.api.put(`/${id}`)
  // // etc...
}

// export default Wines;