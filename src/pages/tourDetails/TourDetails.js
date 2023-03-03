import "./tourDetails.scss"
import {
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap"
import { useParams } from "react-router-dom"
import calculateAvgRating from "../../utils/avgRating"
import avatar from "../../assets/images/avatar.jpg"
import { useEffect, useRef, useState } from "react"
import Booking from "../../components/Booking/Booking"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import { useDispatch, useSelector } from "react-redux"
import { getSingleTourAction } from "../../redux/Tours/TourAction"
import { toast } from "react-toastify"
import { submitReview } from "../../helpers/axiosHelper"

const TourDetails = () => {
  const dispatch = useDispatch()
  const { _id } = useParams()
  const reviewMsgRef = useRef("")
  const { user } = useSelector((state) => state.auth)
  const { selectedTour, isLoading } = useSelector((state) => state.tour)
  const [tourRating, setTourRating] = useState(0)
  const [shouldFetch, setShouldFetch] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setShouldFetch(true)
    shouldFetch && dispatch(getSingleTourAction(_id))
    setShouldFetch(false)
    window.scrollTo(0, 0)
  }, [dispatch, _id, shouldFetch])

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
  } = selectedTour

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" }

  // submit request to server
  const handleSubmit = async (e) => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    // call api to post to db
    if (!user || user === undefined || user === null) {
      toast.error("Please log in to give reviews!")
      return
    }

    if (tourRating === null || tourRating === 0) {
      toast.error("Please rate the tour between 1 star to 5 stars")
      return
    }

    setLoading(true)
    const reviewObj = {
      username: user?.username,
      reviewText,
      rating: tourRating,
    }
    try {
      const { status, message } = await submitReview({
        reviewObj,
        _id,
      })

      setLoading(false)

      status && toast[status](message)
      setShouldFetch(true)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <section>
        <Container>
          {isLoading ? (
            <div className="text-center">
              <Spinner
                animation="grow"
                style={{ width: "5rem", height: "5rem" }}
              />
            </div>
          ) : (
            <Row>
              <Col lg={8}>
                <div className="tour-content">
                  <img src={photo} alt="tour-img" />

                  <div className="tour-info">
                    <h2>{title}</h2>

                    <div className="d-flex align-items-center gap-5">
                      <span className="tour-rating d-flex align-items-center gap-1">
                        <i
                          className="ri-star-fill"
                          style={{ color: "gold" }}
                        ></i>{" "}
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
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
                        <i className="ri-money-dollar-circle-line"></i>${price}{" "}
                        / person
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
                          <i
                            className={
                              tourRating >= 1 ? "ri-star-fill" : "ri-star-line"
                            }
                          ></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          <i
                            className={
                              tourRating >= 2 ? "ri-star-fill" : "ri-star-line"
                            }
                          ></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          <i
                            className={
                              tourRating >= 3 ? "ri-star-fill" : "ri-star-line"
                            }
                          ></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          <i
                            className={
                              tourRating >= 4 ? "ri-star-fill" : "ri-star-line"
                            }
                          ></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          <i
                            className={
                              tourRating === 5 ? "ri-star-fill" : "ri-star-line"
                            }
                          ></i>
                        </span>
                      </div>

                      <div className="review-input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts..."
                          required
                        />
                        <Button
                          className="btn primary-btn text-light"
                          type="submit"
                          disabled={!tourRating}
                        >
                          {loading ? <Spinner animation="grow" /> : "Submit"}
                        </Button>
                      </div>
                    </Form>
                    <ListGroup className="user-reviews">
                      {reviews?.map((review) => (
                        <div className="review-item" key={review._id}>
                          <img src={avatar} alt="avatar" />

                          <div className="w-100">
                            <div className="d-flex align-item-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>

                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i className="ri-star-s-fill"></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                  {/* ====== tour reviews section end ====== */}
                </div>
              </Col>
              <Col lg={4}>
                <Booking tour={selectedTour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}
export default TourDetails
