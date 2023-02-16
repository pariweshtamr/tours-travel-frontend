import "./tourDetails.scss"
import tourData from ".././../assets/data/tours"
import { Col, Container, Form, ListGroup, Row } from "reactstrap"
import { useParams } from "react-router-dom"
import calculateAvgRating from "../../utils/avgRating"
import avatar from "../../assets/images/avatar.jpg"
import { useRef, useState } from "react"
import Booking from "../../components/Booking/Booking"
import NewsLetter from "../../components/NewsLetter/NewsLetter"

const TourDetails = () => {
  const { id } = useParams()

  const reviewMsgRef = useRef("")
  const [tourRating, setTourRating] = useState(null)

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

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" }

  // submit request to server
  const handleSubmit = (e) => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    // call api to post to db
  }
  return (
    <>
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
                      <i className="ri-map-pin-user-fill"> {address}</i>
                    </span>
                  </div>

                  <div className="tour-extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i>${price} /
                      person
                    </span>
                    <span>
                      <i className="ri-map-pin-time-line"></i>
                      {distance} km
                    </span>
                    <span>
                      <i className="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ====== tour reviews section ====== */}
                <div className="tour-reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating-group">
                      <span onClick={() => setTourRating(1)}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                    </div>

                    <div className="review-input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts..."
                      />
                      <button
                        className="btn primary-btn text-light"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user-reviews">
                    {reviews?.map((review, i) => (
                      <div className="review-item" key={i}>
                        <img src={avatar} alt="avatar" />

                        <div className="w-100">
                          <div className="d-flex align-item-center justify-content-between">
                            <div>
                              <h5>Pariwesh</h5>
                              <p>
                                {new Date("01-18-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>

                            <span className="d-flex align-items-center">
                              5<i className="ri-star-s-fill"></i>
                            </span>
                          </div>

                          <h6>Amazing tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ====== tour reviews section end ====== */}
              </div>
            </Col>

            <Col lg={4}>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}
export default TourDetails
