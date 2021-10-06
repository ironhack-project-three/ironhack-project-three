const axios = require("axios");
export class Review {

  constructor(baseURL) { //baseUrl could be overwritten in the route that uses the API
    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000"
    this.baseURL = `${baseUrl}/review` 
    this.api = axios.create(
      {
        baseURL: this.baseURL
      }
    )

  }

  // // CHANGE THE PATHS ACCORDING TO API DOCUMENTATION
  updateReview = () => this.api.get(`/edit/${id}`);

  deleteReview = () => this.api.get(`/delete/${id}`)

  getOne = (id) => this.api.get(`/${id}`);
 
  createReview = (newEntityValues) =>
    this.api.post("/create", newEntityValues);

  // deleteOne = (id)=> this.api.delete(`/${id}`)
  // updateOne = (id)=> this.api.put(`/${id}`)
  // // etc...
}

