import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
// import Img from "gatsby-image"
import Layout from "../components/layout/index"
import SEO from "../components/seo/seo"
import { Card, Button, CardDeck } from "react-bootstrap"
import './styles.css'

const IndexPage = ({ data }) => { 
  
  return (
  <Layout>
      <SEO title="Home" />
      {/* Feature Article card */}
      <div class="feature-title">
        <h1 class="page-title">FEATURE</h1>
        <div class="line" />
      </div>
      <Card id="feature-card">
        {/* <Card.Header className="card-header">Feature Article</Card.Header> */}
        <Card.Body>
          <Card.Title className="title">
            <Link to={'/details'}>MASUFURI SIGNS NEW RECORD DEAL</Link>
          </Card.Title>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          This is more text added to the card
          </Card.Text>
          <StaticImage alt="This is a concert" src="../images/concert.jpg"/>
          {/* <Button variant="dark">Read Full story</Button> */}
        </Card.Body>
      </Card>
      <br/>

      {/* Other Stories' Cards */}
      <CardDeck>
        <Card className="card-style">
          <Card.Body>
            <div class="other-title">
              <h2 class="sub-title">MUSIC</h2>
              <div class="sub-line" />
            </div>
            <StaticImage alt="This is a concert" src="../images/trumpet.jpg"/>
            <Card.Title>
              <Link to={'/details'}>MASUFURI SIGNS NEW RECORD DEAL</Link>
            </Card.Title>
            {/* <Button variant="dark">Read Full story</Button> */}
          </Card.Body>
        </Card>
    
        <Card className="card-style">
          <Card.Body>
            <div class="other-title">
              <h2 class="sub-title">FASHION</h2>
              <div class="sub-line" />
            </div>
            <StaticImage alt="This is a concert" src="../images/fashion.jpg"/>
            <Card.Title>
              <Link to={'/details'}>MASUFURI SIGNS NEW RECORD DEAL</Link>
            </Card.Title>
            {/* <Button variant="dark">Read Full story</Button> */}
          </Card.Body>
        </Card>
        
        <Card className="card-style">
          <Card.Body>
            <div class="other-title">
              <h2 class="sub-title">DRINKS</h2>
              <div class="sub-line" />
            </div>
            <StaticImage alt="This is a concert" src="../images/wine.jpg"/>
            <Card.Title>
              <Link to={'/details'}>MASUFURI SIGNS NEW RECORD DEAL</Link>
            </Card.Title>
            {/* <Button variant="dark">Read Full story</Button> */}
          </Card.Body>
        </Card>
      </CardDeck>
      
      
  </Layout>
)
}


export default IndexPage
