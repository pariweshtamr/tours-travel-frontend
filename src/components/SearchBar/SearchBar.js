import { useRef } from "react"
import { Col, Form, FormGroup } from "reactstrap"
import "./searchBar.scss"
const SearchBar = () => {
  const locationRef = useRef("")
  const distanceRef = useRef(0)
  const peopleRef = useRef(0)

  const searchHandler = (e) => {
    e.preventDefault()
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const people = peopleRef.current.value

    if (location === "" || distance === "" || people === "") {
      return alert("All fields are required!")
    }
  }
  return (
    <Col lg={12}>
      <div className="search-bar">
        <Form
          className="d-flex align-items-center gap-4"
          onSubmit={searchHandler}
        >
          <FormGroup className="d-flex align-items-center gap-3 form-group form-group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3 form-group form-group-fast">
            <span>
              <i class="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance km"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3 form-group">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={peopleRef} />
            </div>
          </FormGroup>

          <button className="search-icon" type="submit">
            <i class="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  )
}
export default SearchBar
