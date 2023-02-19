import { Col, Container, Row } from "reactstrap"
import CommonSection from "../../components/CommonSection/CommonSection"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import TourCard from "../../components/TourCard/TourCard"
import NewsLetter from "../../components/NewsLetter/NewsLetter"

const SearchResult = () => {
  const location = useLocation()
  const [tours] = useState(location.state)
  return (
    <div>
      <CommonSection title="Tour Search Result" />
      <section>
        <Container>
          <Row>
            {!tours.length ? (
              <h4 className="text-center">No Tours found!</h4>
            ) : (
              tours?.map((tour) => (
                <Col lg={3} className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
        <NewsLetter />
      </section>
    </div>
  )
}
export default SearchResult
