import CommonSection from "../../components/CommonSection/CommonSection"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import SearchBar from "../../components/SearchBar/SearchBar"
import TourCard from "../../components/TourCard/TourCard"
import tourData from "../../assets/data/tours"

import "./tours.scss"
import { Col, Container, Row } from "reactstrap"
import { useEffect, useState } from "react"
const Tours = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5 / 4) // later we will use backend data count
    setPageCount(pages)
  }, [page])

  // console.log([...Array(pageCount).keys()])
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
          <Row>
            {tourData?.map((tour) => (
              <Col lg={3} className="mb-4" key={tour.id}>
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
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}
export default Tours
