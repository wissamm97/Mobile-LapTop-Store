import { useSelector, useDispatch } from "react-redux";
import { axiosLoop } from "../../redux/Slices/product-slice";
import { useEffect } from "react";
import { Col, Row, Card, Accordion, Container } from "react-bootstrap";
import { addToCart } from "../../redux/Slices/cart-slice";
function Lap() {
  const items = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosLoop());
  }, []);
  return (
    <>
      <Container>
        <h1 className="text-center pt-2 pb-3 fw-bold">LapTop</h1>
        <Row>
          {items
            .filter((item) => item.category === "laptop")
            .map((headset) => (
              <Col style={{ paddingBottom: "25px" }} key={headset.id}>
                <Card style={{ width: "18rem", margin: "0 auto" }}>
                  <Card.Img variant="top" src={headset.image} />
                  <Card.Body>
                    <Card.Title style={{ height: "60px" }}>
                      {headset.title}
                    </Card.Title>
                    <Accordion>
                      <Accordion.Header>Click for Details</Accordion.Header>
                      <Accordion.Body>
                        <Card.Text>{headset.details}</Card.Text>
                      </Accordion.Body>
                    </Accordion>
                    <div className="d-flex justify-content-between pt-4">
                      <Card.Text style={{ margin: "auto 0" }}>
                        {headset.price} $
                      </Card.Text>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => dispatch(addToCart(headset))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart-plus mb-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>{" "}
                        Add{" "}
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
export default Lap;
