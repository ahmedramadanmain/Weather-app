import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="display-1 fw-bold">404</h1>

      <h2 className="mb-3">Page Not Found</h2>

      <p className="text-muted mb-4">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link  to="/" className="btn-primary">
        <FaArrowLeft className="me-2" />
        Back to Home
      </Link>
    </Container>
  );
};

export default NotFound;

