import { Link } from "react-router-dom"
import { Button, Col, Container, Row } from "react-bootstrap"
import "./thankyou.scss"
const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={12} className="pt-5 text-center">
            <div className="thank-you">
              <span>
                <i className="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fe-semibold">Thank You</h1>
              <h3 className="mb-4">Your tour is booked.</h3>

              <Button className="btn primary-btn w-25">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default ThankYou
