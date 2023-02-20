import TourCard from "../TourCard/TourCard"
import { Col } from "reactstrap"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFeaturedToursAction } from "../../redux/Tours/TourAction"

const FeaturedTours = () => {
  const dispatch = useDispatch()
  const { featuredTours } = useSelector((state) => state.tour)
  useEffect(() => {
    dispatch(getFeaturedToursAction())
  }, [dispatch])

  return (
    <>
      {featuredTours?.map((tour, i) => (
        <Col lg={3} md={6} sm={6} className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  )
}
export default FeaturedTours
