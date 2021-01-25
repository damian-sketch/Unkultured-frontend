import React from "react"
import Layout from "../../components/layout"
import Comment from "../../components/comment"
// Details for the Feature story
export default function FeatureDetails() {
    const comment = {
        // date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Cedric',
          avatarUrl: 'https://placekitten.com/g/64/64',
        },
      };
    
    return(
        <Layout>
        <div className="detailsbody">
        <h1>This is the details Page</h1>
        <p>Excepteur nisi consequat et nostrud labore duis sint dolor sunt. Excepteur exercitation laborum tempor consequat ex consequat. Deserunt aute culpa voluptate aute id consectetur qui. Velit deserunt irure consectetur ut excepteur ex officia minim commodo cupidatat Lorem ut. Eiusmod incididunt nisi fugiat culpa dolore reprehenderit aliqua nisi elit laboris ullamco. Occaecat velit esse officia non ea cupidatat dolor eu culpa ea laboris sit velit. Labore proident exercitation eiusmod duis duis excepteur ea minim occaecat laboris occaecat.</p>
        </div>  
        <Comment comment={comment}/>
        </Layout>

    )

}
