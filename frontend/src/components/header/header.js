import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg"bg='primary' className="bg-body-tertiary" variant='dark'>
      <Container>
        <Navbar.Brand><Link to="/">FastDraft</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav>
              <>
                <Nav.Link href="/mynotes">My Notes</Nav.Link>
                
              </>
             
          </Nav>
      </Container>
    </Navbar>
  )
}