import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction, removeToFavoritesAction } from "../src/redux/actions";

const Companies = ({ company }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.content);
  const isCompanyFavourited = favourites.includes(company);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        {isCompanyFavourited ? (
          <HeartFill className="me-2 text-danger" onClick={() => dispatch(removeToFavoritesAction(company))} />
        ) : (
          <Heart className="me-2" onClick={() => dispatch(addToFavoritesAction(company))} />
        )}
        <Link to={`/${company}`}>{company}</Link>
      </Col>
    </Row>
  );
};

export default Companies;
