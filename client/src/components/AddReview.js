import { useState } from "react";
import {motion} from "framer-motion"
import Wines from "../api/wines";

function AddReview(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const { wineId } = props;
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { comment,  wineId };
    console.log("line 14 add revire", requestBody)

    const storedToken = localStorage.getItem("authToken");
    try {
      const response = await new Wines().createReview(requestBody, storedToken)
      console.log("add review 18", response)
      setComment(response.data.comment);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };


  return (
    <div className="AddTask">

      <form onSubmit={handleSubmit}>
        {errorMessage}
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