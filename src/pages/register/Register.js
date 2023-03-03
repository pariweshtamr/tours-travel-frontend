import { Link, useNavigate } from "react-router-dom"
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"
import "../login/login.scss"
import regImg from "../../assets/images/register.png"
import userIcon from "../../assets/images/user.png"
import { useState } from "react"
import { registerUser } from "../../helpers/axiosHelper"
import { toast } from "react-toastify"

const initialState = {
  fName: "",
  lName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState)
  const [meter, setMeter] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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

    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match!")
    }

    if (passwordStrength !== 5) return

    const { confirmPassword, ...rest } = formData
    const { status, message } = await registerUser(rest)

    setIsLoading(false)

    if (status === 200) {
      toast.error(message)
      return
    }
    status === "success"
      ? toast[status](message) && navigate("/login")
      : toast[status](message)
    setFormData(initialState)
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg={10} className="m-auto">
            <div className="login-container d-flex justify-content-between">
              <div className="login-img">
                <img src={regImg} alt="login-img" />
              </div>

              <div className="login-form">
                <div className="user">
                  <img src={userIcon} alt="user-icon" />
                </div>
                <h2>Register</h2>

                <Form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-3"
                >
                  <Form.Group>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      id="fName"
                      onChange={handleChange}
                      value={formData.fName}
                    />
                  </Form.Group>
                  <Form.Group>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      id="lName"
                      onChange={handleChange}
                      value={formData.lName}
                    />
                  </Form.Group>
                  <Form.Group>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                      value={formData.username}
                    />
                  </Form.Group>
                  <Form.Group>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </Form.Group>
                  <Form.Group>
                    <input
                      onKeyDown={() => setMeter(true)}
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                      value={formData.password}
                      minLength={7}
                    />
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
                          {!passwordTracker.specialChar &&
                            "special character, "}
                          {!passwordTracker.numeric && "number, "}
                          {!passwordTracker.sevenOrMoreChars &&
                            "seven character or more"}
                        </div>
                      </>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      id="confirmPassword"
                      onChange={handleChange}
                      value={formData.confirmPassword}
                    />
                  </Form.Group>
                  <Button
                    className="btn secondary-btn auth-btn"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner animation="grow" /> : "Register"}
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx="true">
        {`
          .password-strength-meter {
            height: 0.3rem;
            background: lightgrey;
            border-radius: 3px;
            margin: 0.5rem 0;
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
    </section>
  )
}
export default Register
