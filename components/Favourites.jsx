import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Companies from "./Companies";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Preferiti</h1>
          <Link to="/">Torna indietro</Link>
          {favourites.map((company, i) => (
            <Companies key={i} company={company} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
