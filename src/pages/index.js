import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Card, Button } from "react-bootstrap"

const IndexPage = () => (

  <Layout>
      <SEO title="Home" />
      <Card style={{ height: '18rem' }} >
        <Card.Header>Feature Article</Card.Header>
        <Card.Body>
          <Card.Title>MASUFURI SIGNS NEW RECORD DEAL</Card.Title>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
          <Button variant="dark">Read Full story</Button>
        </Card.Body>
      </Card>

      <Card style={{ marginTop: '7rem', marginLeft: '50rem' }} >
        <Card.Header>Feature Article</Card.Header>
        <Card.Body>
          <Card.Title>MASUFURI SIGNS NEW RECORD DEAL</Card.Title>
          <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Text>
          <Button variant="dark">Read Full story</Button>
        </Card.Body>
      </Card>
  </Layout>
)

export default IndexPage
