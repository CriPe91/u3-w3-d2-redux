import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, setQueryAction } from "../src/redux/actions";

const MainSearch = () => {
  // const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.content);

  const query = useSelector((state) => state.query.content);

  const handleChange = (e) => {
    dispatch(setQueryAction(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobs(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/favourites">I tuoi preferiti!</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" required />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
