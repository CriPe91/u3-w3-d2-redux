import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const companies = useSelector((state) => state.favourites.content);
  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Preferiti</h1>
          <Link to="/">Torna indietro</Link>
          {companies.map((company, i) => (
            <Row key={i} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
              <Col xs={3}>
                <Link to={`/${company}`}>{company}</Link>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
