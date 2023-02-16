import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap"
import "./booking.scss"

const Booking = ({ tour, avgRating }) => {
  const navigate = useNavigate()
  const { price, reviews } = tour
  const [credentials, setCredentials] = useState({
    userId: "01", // will be dynamic later
    userEmail: "pariwesh071@gmail.com",
    fullName: "Pariwesh Tamrakar",
    phone: "0499999999",
    guestSize: "1",
    bookAt: "",
  })

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  // send data to server

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/thank-you")
  }

  const serviceFee = 10
  const totalAmount = +price * +credentials.guestSize + +serviceFee
  return (
    <div className="booking">
      <div className="booking-top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/ person</span>
        </h3>
        <span className="tour-rating d-flex align-items-center">
          <i
            className="ri-star-fill"
            style={{ color: "var(--secondary-color)" }}
          ></i>{" "}
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* =========== booking form ============ */}
      <div className="booking-form">
        <h5>Information</h5>
        <Form className="booking-info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" id="bookAt" required onChange={handleChange} />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* =========== booking form end ============ */}

      {/* =========== booking bottom =========== */}
      <div className="booking-bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span> ${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span> ${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span> ${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary-btn w-100 mt-4" onClick={handleSubmit}>
          Book Now
        </Button>
      </div>
      {/* =========== booking bottom end =========== */}
    </div>
  )
}
export default Booking
