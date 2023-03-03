import { useState } from "react"
import { useSelector } from "react-redux"
import { Button, Form, FormGroup, ListGroup } from "react-bootstrap"
import { toast } from "react-toastify"
import "./booking.scss"
import { createCheckoutSession } from "../../helpers/axiosHelper"

const Booking = ({ tour, avgRating }) => {
  const { user } = useSelector((state) => state.auth)
  const { price, reviews, title } = tour

  const [booking, setBooking] = useState({
    userId: user?._id,
    userEmail: user?.email,
    tourName: title,
    tourPrice: price,
    name: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
    serviceFee: 10,
    tourId: tour?._id,
  })
  const totalAmount = +price * +booking.guestSize + +booking.serviceFee

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

      const session = await createCheckoutSession(booking)
      if (session?.url) {
        window.location.href = session.url
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

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
              placeholder="Name"
              id="name"
              required
              onChange={handleChange}
              value={booking.name}
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
              min={1}
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
          <ListGroup.Item className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> {booking.guestSize}
            </h5>
            <span> ${price * booking.guestSize}</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 px-0">
            <h5>Service charge</h5>
            <span> ${booking.serviceFee}</span>
          </ListGroup.Item>
          <ListGroup.Item className="border-0 px-0 total">
            <h5>Total</h5>
            <span> ${totalAmount}</span>
          </ListGroup.Item>
        </ListGroup>
        <Button
          disabled={!booking.name || !booking.bookAt || !booking.phone}
          className="btn primary-btn w-100 mt-4"
          onClick={handleSubmit}
        >
          Book Now
        </Button>
      </div>
      {/* =========== booking bottom end =========== */}
    </div>
  )
}
export default Booking
