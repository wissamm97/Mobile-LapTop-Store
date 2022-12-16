import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="bg-dark text-white">
        <Container className=" text-center p-4">
          <h1 className=" text-white">Design By :</h1>
          <Row>
            <Col>
              <h4>Wissam Abdalwhab</h4>
              <a
                href="mailto:WissamAbdalwhab.97@gmail.com?subject=Contact"
                className="link-info"
              >
                WissamAbdalwhab.97@gmail.com
              </a>
              <ul className="social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/wissam.wesam.5/"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/wissam-abd-84417a226/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/wissamm97?tab=repositories"
                    target="_blank"
                    className="github"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4>Mahmoud Habab</h4>
              <a
                href="mailto:memo12memo34memo@gmail.com?subject=Contact"
                className="link-info"
              >
                memo12memo34memo@gmail.com
              </a>
              <ul className="social">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/memo12memo34memo/"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/mahmoud-habab"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mahmoud-habab"
                    target="_blank"
                    className="github"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Contact;
