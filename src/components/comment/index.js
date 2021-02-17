import { useState } from "react";
import React from "react"

export default function Comment() {
    const [ comment ] = useState(" ")

    // const handleComment = (event) => {
    //   const { value } = event.target;
    //   console.log(value);
    //   setComment(value);
    // };

    const handleForm = (event) => {
      event.preventDefault();
    }
    return (
      <div className="wrapper">
        <form onSubmit={handleForm}>
          <h2>Leave a thought:</h2>
          <input id="comment-body" name="comment" value={comment}/>
          
        </form>

      </div>
    )
  
  
  
  }
