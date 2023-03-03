import "./commonSection.scss"
import { Col, Container, Row } from "react-bootstrap"

const CommonSection = ({ title }) => {
  return (
    <section className="common-section">
      <Container>
        <Row>
          <Col lg={12}>
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CommonSection
