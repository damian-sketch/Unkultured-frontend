import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Button, CardDeck } from "react-bootstrap"
import './index.css'

const IndexPage = ({ data }) => { 
  return (
  <Layout>
      <SEO title="Home" />
      <Card>
        <Card.Header className="card-header">Feature Article</Card.Header>
        <Card.Body>
          <Card.Title>
            <Link to={'/page-2/page-2'}>MASUFURI SIGNS NEW RECORD DEAL</Link>
          </Card.Title>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          This is more text added to the card
          </Card.Text>
          <StaticImage alt="This is a concert" src="../images/concert.jpg"/>
          <Button variant="dark">Read Full story</Button>
        </Card.Body>
      </Card>

    <CardDeck>
      <Card style={{ marginTop: '2rem', width: '450px' }} >
        <Card.Body>
          <Card.Title>MASUFURI SIGNS NEW RECORD DEAL</Card.Title>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
          <Button variant="dark">Read Full story</Button>
        </Card.Body>
      </Card>
   
      <Card style={{ marginTop: '2rem', width: '450px' }} >
        <Card.Body>
          <Card.Title>MASUFURI SIGNS NEW RECORD DEAL</Card.Title>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
          <Button variant="dark">Read Full story</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ marginTop: '2rem', width: '450px' }} >
        <Card.Body>
          <Card.Title>MASUFURI SIGNS NEW RECORD DEAL</Card.Title>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
          <Button variant="dark">Read Full story</Button>
        </Card.Body>
      </Card>

    </CardDeck>

  </Layout>
)
}


export default IndexPage
