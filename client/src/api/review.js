const axios = require("axios");
export class Review {
  constructor(baseURL) {
    //baseUrl could be overwritten in the route that uses the API
    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";
    this.baseURL = `${baseUrl}/review`;
    this.api = axios.create({
      baseURL: this.baseURL,
    });
  }

  // // CHANGE THE PATHS ACCORDING TO API DOCUMENTATION
  updateReview = (id, newEntityValues, storedToken) =>
    this.api.put(`/edit/${id}`, newEntityValues, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });

  deleteReview = (id, storedToken) =>
    this.api.delete(`/delete/${id}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });

  getOne = (id) => this.api.get(`/${id}`);

  createReview = (newEntityValues, storedToken) =>
    this.api.post("/create", newEntityValues, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });

  // deleteOne = (id)=> this.api.delete(`/${id}`)
  // updateOne = (id)=> this.api.put(`/${id}`)
  // // etc...
}
