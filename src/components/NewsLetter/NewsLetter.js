import { Col, Container, Row } from "reactstrap"
import maleTourist from "../../assets/images/male-tourist.png"
import "./newsletter.scss"
const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="newsletter-content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newsletter-input">
                <input type="email" placeholder="Enter your email" />
                <button type="submit" className="btn newsletter-btn">
                  Subscribe
                </button>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur pariatur recusandae ipsa nihil explicabo sapiente.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="newsletter-img">
              <img src={maleTourist} alt="newsletter-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default NewsLetter
