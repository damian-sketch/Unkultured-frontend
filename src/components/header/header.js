import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Logo from "../../images/Logo Final White.png"
import './header.css'

const Header = () => (
  <header className="bg-dark">
    <Container>
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <img className="logo" src={ Logo } alt="Logo" style={{height:40}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/page-2/page-2" className="nav-link" activeClassName="active">Music</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/404/404" className="nav-link" activeClassName="active">News</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="" className="nav-link" activeClassName="active">Lifestyle</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="" className="nav-link" activeClassName="active">Pop-Culture</Link>
            </Nav.Item>
            <Form inline>
              <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              <Button type="submit" variant="dark">Submit</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
