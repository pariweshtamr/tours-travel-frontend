import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap"
import { toast } from "react-toastify"
import "./booking.scss"
import { createBooking } from "../../helpers/axiosHelper"

const Booking = ({ tour, avgRating }) => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const { price, reviews, title } = tour
  const [booking, setBooking] = useState({
    userId: user?._id,
    userEmail: user?.email,
    tourName: title,
    fName: "",
    lName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  })

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  // send data to server

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!user || user === undefined || user === null) {
        toast.error("Please login to book a tour!")
      }
      const { token } = user
      const { status } = await createBooking({ booking, token })

      status === "success" && navigate("/thank-you")
    } catch (error) {
      toast.error(error.message)
    }
  }

  const serviceFee = 10
  const totalAmount = +price * +booking.guestSize + +serviceFee
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
              placeholder="First Name"
              id="fName"
              required
              onChange={handleChange}
              value={booking.fName}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Last Name"
              id="lName"
              required
              onChange={handleChange}
              value={booking.lName}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
              value={booking.phone}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              id="bookAt"
              required
              onChange={handleChange}
              value={booking.bookAt}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
              value={booking.guestSize}
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
              ${price} <i className="ri-close-line"></i> {booking.guestSize}
            </h5>
            <span> ${price * booking.guestSize}</span>
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
