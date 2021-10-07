import React from "react";
import { useState } from "react";
import {motion} from "framer-motion"
import {FaCheck, FaPencilAlt, FaTimes, FaTrashAlt} from "react-icons/fa";

import  {Review}  from "../api/review";

export default function ReviewCard(props) {
    const reviewId = props.review._id
    const [comment, setComment] = useState(props.review.comment);

    const [isEditing, setEditing] = useState(false);
    const handleChange = (e) => {
        // e.preventDefault()
        setComment(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const requestBody = { comment };
        const storedToken = localStorage.getItem("authToken");
        try {
            const response = await new Review().updateReview(reviewId, requestBody, storedToken)
            setComment(response.data.comment)
            await props.refreshWine(props.wine)
        } catch (error) {
            console.log("Got an error:", error)
            // TODO: setErrorMessage so user seems something in the UI and not just in the console
        }
        setEditing(false)
    }
    const handleEdit = (e) => {
        e.preventDefault()
        setEditing(true)
    }
    const handleCancel = (e) => {
        e.preventDefault()
        setComment(props.review.comment)
        setEditing(false)
    }
    const handleDelete = async (e) => {
        e.preventDefault()
        const storedToken = localStorage.getItem("authToken");
        try {
            await new Review().deleteReview(reviewId, storedToken)
            props.refreshWine(props.wine)
        } catch (error) {
            console.log("Got an error:", error)
            // TODO: setErrorMessage so user seems something in the UI and not just in the console
        }
    }

    return (
        <p>
            {
                isEditing ?
                    <>
                        <form onSubmit={handleSubmit}>
                            <div class="field">
                                <label class="label">{props.review.user.username}</label>
                                <div class="control">
                                    <input class="input" type="text" value={ comment} onChange={handleChange}/>
                                </div>
                            </div>

                            <div class="field is-grouped">
                                <div class="control">
                                    <motion.button class="button is-link"
                                        whileHover = {{ scale: 1.1}}
                                        whileTap = {{ scale: 0.9}}
                                         ><FaCheck />
                                         </motion.button>
                                </div>
                                <div class="control">
                                    <motion.button 
                                    whileHover = {{ scale: 1.1}}
                                    whileTap = {{ scale: 0.9}}
                                    class="button is-link is-light" onClick={(e) => handleCancel(e)}>
                                        <FaTimes />
                                    </motion.button>
                                </div>
                            </div>
                        </form>
                    </>
                :
                    <div className="is-flex is-align-items-flex-center is-justify-content-space-between">
                        {props.review.user.username} { props.review.comment} 
                        <div>
                            <motion.button 
                               whileHover = {{ scale: 1.1}}
                               whileTap = {{ scale: 0.9}}
                            className="button is-warning is-rounded is-small" onClick={(e) => handleEdit(e)}>
                                <FaPencilAlt />
                            </motion.button>
                            <motion.button 
                               whileHover = {{ scale: 1.1}}
                               whileTap = {{ scale: 0.9}}
                            className="button is-warning is-rounded is-small" onClick={(e) => handleDelete(e)}>
                                <FaTrashAlt />
                            </motion.button>
                        </div>
                    </div>
            }
        </p>
    );
}