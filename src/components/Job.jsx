import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction, removeFromFavouritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.content);
  const isCompanyFavourited = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        {isCompanyFavourited ? (
          <HeartFill className="me-2 text-danger" onClick={() => dispatch(removeFromFavouritesAction(data.company_name))} />
        ) : (
          <Heart className="me-2" onClick={() => dispatch(addToFavouritesAction(data.company_name))} />
        )}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
