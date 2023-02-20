import CommonSection from "../../components/CommonSection/CommonSection"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import SearchBar from "../../components/SearchBar/SearchBar"
import TourCard from "../../components/TourCard/TourCard"
import { Col, Container, Row, Spinner } from "reactstrap"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getToursAction } from "../../redux/Tours/TourAction"
import "./tours.scss"

const Tours = () => {
  const dispatch = useDispatch()
  const { tourCount, tours, isLoading } = useSelector((state) => state.tour)
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    dispatch(getToursAction(page))
    const pages = Math.ceil(tourCount / 8)
    setPageCount(pages)
    window.scrollTo(0, 0)
  }, [dispatch, tourCount, page])

  return (
    <>
      <CommonSection title="All Tours" />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {!isLoading ? (
            <Row>
              {tours?.map((tour) => (
                <Col lg={3} md={6} sm={6} className="mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              <Col lg={12}>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active-page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          ) : (
            <div className="text-center">
              <Spinner
                type="grow"
                style={{
                  height: "5rem",
                  width: "5rem",
                }}
              />
            </div>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}
export default Tours
