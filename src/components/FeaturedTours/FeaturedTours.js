import TourCard from "../TourCard/TourCard"
import tourData from "../../assets/data/tours"
import { Col } from "reactstrap"

const FeaturedTours = () => {
  return (
    <>
      {tourData?.map((tour, i) => (
        <Col lg={3} className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  )
}
export default FeaturedTours
