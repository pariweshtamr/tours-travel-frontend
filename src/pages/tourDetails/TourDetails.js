import "./tourDetails.scss"
import tourData from ".././../assets/data/tours"
import { Col, Container, Row } from "reactstrap"
import { useParams } from "react-router-dom"
import calculateAvgRating from "../../utils/avgRating"
const TourDetails = () => {
  const { id } = useParams()

  // this is static data, we will call our API later and load data from db
  const tour = tourData.find((tour) => tour.id === id)

  // destructure properties from our object
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews)
  return (
    <section>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="tour-content">
              <img src={photo} alt="tour-img" />

              <div className="tour-info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour-rating d-flex align-items-center gap-1">
                    <i className="ri-star-fill" style={{ color: "gold" }}></i>{" "}
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>

                  <span>
                    {" "}
                    <i className="ri-map-pin-fill">{address}</i>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default TourDetails
