import "./landingPage.css";
import { Button,Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Fast Draft</h1>
              <p className="subtitle">Capture Ideas in a Flash, Draft at the Speed of Thought!</p>
            </div>
            <div className="buttonContainer">
              {/* <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link> */}
              <a href="/login">
                <Button  size="lg"
                  className="landingbutton">Login</Button>
              </a>
              <a href="/register">
                <Button  size="lg"
                  className="landingbutton" variant="outline-primary">Signup</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
