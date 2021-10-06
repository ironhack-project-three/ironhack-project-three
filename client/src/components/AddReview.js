import { useState, useEffect } from "react";
import axios from "axios";
import {motion} from "framer-motion"

const API_URL = "http://localhost:3000";

function AddReview(props) {
    const { wineId } = props;
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { comment,  wineId };
    console.log("line 14 add revire", requestBody)

    const storedToken = localStorage.getItem("authToken");
    axios
      .post(
        `${API_URL}/review/create`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
          console.log("add review 23", response)
          axios.get(
            (`wines/wine/${wineId}`)
          )
       setComment(comment);
    
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddTask">

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Write your review here"
          type="text"
          name="review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
             <motion.button 
             type="submit"
             className = "button is-normal"
             whileHover = {{ scale: 1.1}}
             whileTap = {{ scale: 0.9}}
             >Add Review
        </motion.button>
      </form>
    </div>
  );
}

export default AddReview;