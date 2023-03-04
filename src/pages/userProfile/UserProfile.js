import { useDispatch, useSelector } from "react-redux"
import {
  Col,
  Container,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Accordion,
  Table,
  Spinner,
} from "react-bootstrap"
import avatar from "../../assets/images/avatar.jpg"
import "./userProfile.scss"
import CommonSection from "../../components/CommonSection/CommonSection"
import { useEffect, useState } from "react"
import { getRefundForBooking, updatePassword } from "../../helpers/axiosHelper"
import { toast } from "react-toastify"
import { getUserBookingAction } from "../../redux/Booking/BookingAction"
const initialState = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
}
const UserProfile = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { bookings, isLoading } = useSelector((state) => state.booking)
  const [formData, setFormData] = useState(initialState)
  const [show, setShow] = useState(false)
  const [meter, setMeter] = useState(false)

  const atLeastOneUpperCase = /[A-Z]/g // capital letters from A - Z
  const atLeastOneLowerCase = /[a-z]/g // capital letters from a - z
  const atleastOneNumeric = /[0-9]/g // numbers from 0 - 9
  const atLeastOneSpecialChar = /[!@#$%^&*()_+?./-]/g // any of the special characters with the square brackets
  const sevenCharsOrMore = /.{7,}/g // seven or more characters

  const passwordTracker = {
    uppercase: formData.password.match(atLeastOneUpperCase),
    lowercase: formData.password.match(atLeastOneLowerCase),
    numeric: formData.password.match(atleastOneNumeric),
    specialChar: formData.password.match(atLeastOneSpecialChar),
    sevenOrMoreChars: formData.password.match(sevenCharsOrMore),
  }

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length

  const handleChange = (e) => {
    const { id, value } = e.target

    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = async () => {
    const { currentPassword, password, confirmPassword } = formData

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!")
    }
    if (passwordStrength !== 5) return

    const { status, message } = await updatePassword({
      currentPassword,
      password,
    })
    status && toast[status](message)
    setFormData(initialState)
    setShow(false)
  }

  const handleBookingCancel = async (bookingInfo) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        const { status, message } = await getRefundForBooking(bookingInfo)
        if (status === "success") {
          toast[status](message)
          dispatch(getUserBookingAction())
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    dispatch(getUserBookingAction())
  }, [dispatch])

  return (
    <>
      <Modal
        show={show}
        size="sm"
        onHide={() => setShow(false)}
        animation={false}
      >
        <ModalHeader closeButton className="profile-form-header">
          Update Password
        </ModalHeader>
        <ModalBody>
          <Form className="py-2">
            <FormGroup className="d-flex flex-column gap-1 mb-3">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                placeholder="********"
                id="currentPassword"
                className="profile-input"
                onChange={handleChange}
                value={formData.currentPassword}
                autoFocus
              />
            </FormGroup>
            <FormGroup className="d-flex flex-column gap-1 mb-3">
              <label htmlFor="password">New Password</label>
              <div>
                <input
                  onKeyDown={() => setMeter(true)}
                  type="password"
                  className="profile-input"
                  placeholder="********"
                  id="password"
                  onChange={handleChange}
                  value={formData.password}
                  minLength={7}
                />
              </div>
              {meter && (
                <>
                  <div className="password-strength-text mt-2">
                    Password Strength:{" "}
                    {passwordStrength === 1
                      ? "Poor"
                      : passwordStrength === 2
                      ? "Fair"
                      : passwordStrength === 3
                      ? "Good"
                      : passwordStrength === 4
                      ? "Good"
                      : "Excellent"}
                  </div>
                  <div className="password-strength-meter"></div>

                  <div className="password-rules">
                    {passwordStrength < 5 && "Must contain "}
                    {!passwordTracker.uppercase && "uppercase, "}
                    {!passwordTracker.lowercase && "lowercase, "}
                    {!passwordTracker.specialChar && "special character, "}
                    {!passwordTracker.numeric && "number, "}
                    {!passwordTracker.sevenOrMoreChars &&
                      "seven character or more"}
                  </div>
                </>
              )}
            </FormGroup>
            <FormGroup className="d-flex flex-column gap-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="profile-input"
                placeholder="********"
                id="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="rounded-5 py-2 bg-dark"
            style={{ border: "none", outline: "none" }}
            type="submit"
            onClick={handleSubmit}
            disabled={passwordStrength !== 5}
          >
            Update
          </Button>{" "}
          <Button
            className="rounded-5 py-2 bg-light text-dark"
            style={{ border: "none", outline: "none" }}
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <CommonSection title="Welcome to your profile" />
      <Container>
        <Row>
          <Col lg={5} className="m-auto">
            <div className="profile">
              <img src={avatar} alt="avatar" />

              <div className="profile-text">
                <h1>
                  {user?.fName} {user?.lName}
                </h1>
                <p>{user?.email}</p>
              </div>

              <div className="profile-info mb-5">
                <h6>Personal Information</h6>
                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <div className="fw-bold">
                    Username{" "}
                    <p className="text-secondary fw-normal">{user?.username}</p>
                  </div>

                  <div className="fw-bold">
                    Email{" "}
                    <p className="text-secondary fw-normal">{user?.email}</p>
                  </div>
                </div>

                <h6>Account Information</h6>
                <hr />

                <div className="d-flex justify-content-between">
                  <div className="fw-bold">
                    Role{" "}
                    <p className="text-secondary fw-normal">{user?.role}</p>
                  </div>

                  <div className="fw-bold">
                    Joined{" "}
                    <p className="text-secondary fw-normal">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="profile-options">
                <button className="option-btn" onClick={() => setShow(true)}>
                  Update Password
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          {isLoading && <Spinner animation="grow" className="text-center" />}
          {bookings?.length ? (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Booked Tours ({bookings?.length})
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr className="booking-table-head">
                        <td>Date of Issue</td>
                        <td>Tour</td>
                        <td>Number of guests</td>
                        <td>Total Price</td>
                        <td>Payment Status</td>
                        <td>Tour Date</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings?.map((booking) => (
                        <tr key={booking._id} className="booking-table-body">
                          <td>
                            {new Date(booking?.createdAt).toLocaleDateString()}
                          </td>
                          <td>{booking?.tour?.tourName}</td>
                          <td>{booking?.tour?.guestSize}</td>
                          <td>${booking?.tour?.totalPrice}</td>
                          <td
                            className={
                              booking?.paymentStatus === "paid"
                                ? "text-success"
                                : "text-danger"
                            }
                          >
                            {booking?.paymentStatus.toUpperCase()}
                          </td>
                          <td>
                            {new Date(
                              booking?.tour?.bookAt
                            ).toLocaleDateString()}
                          </td>
                          <td>
                            <Button
                              variant="danger"
                              className="cancel-booking-btn"
                              onClick={() => handleBookingCancel(booking)}
                              disabled={booking?.paymentStatus !== "paid"}
                            >
                              {booking?.paymentStatus === "Refunded"
                                ? "CANCELLED"
                                : "Cancel Booking"}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <div>
              <h1>No Bookings!</h1>
            </div>
          )}
        </Row>
        <style jsx="true">
          {`
            .password-strength-meter {
              height: 0.3rem;
              background: lightgrey;
              border-radius: 3px;
              margin: 0.5rem 0;
            }

            .password-strength-text {
              font-size: 0.8rem;
              color: orange;
            }
            .password-rules {
              font-size: 0.7rem;
            }

            .password-strength-meter::before {
              content: "";
              background-color: ${[
                "red",
                "yellow",
                "#03a2cc",
                "#03a2cc",
                "#0ce052",
              ][passwordStrength - 1] || ""};
              height: 100%;
              width: ${(passwordStrength / 5) * 100}%;
              display: block;
              border-radius: 3px;
              transition: width 0.2s;
            }
          `}
        </style>
      </Container>
    </>
  )
}
export default UserProfile
