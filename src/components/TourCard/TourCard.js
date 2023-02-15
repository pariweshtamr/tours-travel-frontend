import { Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"
import "./tourCard.scss"
import calculateAvgRating from "../../utils/avgRating"
const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  return (
    <div className="tour-card">
      <Card>
        <div className="tour-img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card-top d-flex align-items-center justify-content-between">
            <span className="tour-location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour-rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour-title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card-bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> / person</span>
            </h5>
            <button className="btn booking-btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
export default TourCard
