import { Col, Container, Row } from "react-bootstrap"
import noPageImg from "../../assets/images/404.jpeg"
import "./noPage.scss"
const NoPage = () => {
  return (
    <div>
      <Container>
        <Row className="no-page">
          <div className="no-page-text mt-5">
            <Col lg={6}>
              <h1>Sorry,</h1>
              <p>we can't seem to find the page you're looking for.</p>
              <p>
                There may be a misplelling in the URL entered, or the page you
                are looking for may no longer exist.
              </p>
            </Col>
          </div>
          <img src={noPageImg} alt="404 Page Not Found!"></img>
        </Row>
      </Container>
    </div>
  )
}
export default NoPage
