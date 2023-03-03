import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Col, Form } from "react-bootstrap"
import { fetchSearchedTours } from "../../helpers/axiosHelper"
import "./searchBar.scss"
const SearchBar = () => {
  const navigate = useNavigate()
  const locationRef = useRef("")
  const distanceRef = useRef(0)
  const peopleRef = useRef(0)

  const searchHandler = async (e) => {
    e.preventDefault()
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const people = peopleRef.current.value

    if (location === "" || distance === "" || people === "") {
      return alert("All fields are required!")
    }

    const res = await fetchSearchedTours(location, distance, people)

    if (res.status === "success") {
      navigate(
        `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${people}`,
        { state: res.tours }
      )
    }
  }
  return (
    <Col lg={12}>
      <div className="search-bar">
        <Form
          className="d-flex align-items-center gap-4"
          onSubmit={searchHandler}
        >
          <Form.Group className="d-flex align-items-center gap-3 form-group">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </Form.Group>
          <div className="form-group-fast"></div>
          <Form.Group className="d-flex align-items-center gap-3 form-group">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance km"
                ref={distanceRef}
              />
            </div>
          </Form.Group>
          <div className="form-group-fast"></div>
          <Form.Group className="d-flex align-items-center gap-3 form-group">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={peopleRef} />
            </div>
          </Form.Group>

          <button className="search-icon" type="submit">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  )
}
export default SearchBar
