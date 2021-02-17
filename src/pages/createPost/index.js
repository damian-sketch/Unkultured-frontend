import React from "react";
import Layout from "../../components/layout";
import Newpost from "../../components/newPost";
import createAxiosClient from "../../../utils/axios_config"

const axios = createAxiosClient();
class blogPost extends React.Component {
    
    clickedButton() {
        axios.get('http://localhost:3000/api/create-post')
          .then(res => this.setState({hello: res.data}))
          .catch(err => console.log(err))
       }
    render(){
        return(
            <Layout>
            <div className="newPost">
            <Newpost/>
            <button onClick={this.clickedButton}>Click me</button>
            </div>
            </Layout>
            

        )}
};

export default blogPost;
