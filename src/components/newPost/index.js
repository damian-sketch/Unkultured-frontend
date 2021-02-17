import React from "react";

const Newpost = () => {

    const handleForm = (event) => {
        event.preventDefault();
      }

    return (
        <div className="wrapper">
            <form onSubmit={handleForm}>
                <h2>Title:</h2>
                <input id="post-title" name="title" />
                <br/>
                <input id="post-content" name="content" />
                
            </form>



        </div>
    )
}

export default Newpost;