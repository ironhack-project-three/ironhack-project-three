import {useState} from "react";
import {motion} from "framer-motion"
import {Columns} from "react-bulma-components";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";
const axios = require("axios");


function AddReview(props) {
  const { wineId } = props;
  const [errorMessage, setErrorMessage] = useState("");
  const [comment, setComment] = useState("");
  const handleReviewSubmit = (e) => {
    e.preventDefault();
  
    const requestBody = { comment, wineId };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${API_URL}/review/create`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(async (response) => {

       
        setComment("");
        await props.refreshWine(response.data);
    
       
        // Reset the state to clear the inputs
    
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(error)
      });
  };

  return (
    <div className="AddTask">

      <form onSubmit={handleReviewSubmit}>
        {errorMessage}
        <Columns>
          <Columns.Column>
            <div className="field">
              <div className="control">
                <input
                  placeholder="Write your review here"
                  type="text"
                  name="review"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="input"
                />
              </div>
            </div>
          </Columns.Column>
          <Columns.Column className="is-narrow">
            <motion.button 
              type="submit"
              className = "button is-warning is-rounded"
              whileHover = {{ scale: 1.1}}
              whileTap = {{ scale: 0.9}}
                >
                Add Review
            </motion.button>
          </Columns.Column>
        </Columns>
      </form>
    </div>
  );
}

export default AddReview;