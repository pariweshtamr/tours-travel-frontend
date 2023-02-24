import { Link, useNavigate } from "react-router-dom"
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap"
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

  const handleChange = (e) => {
    const { id, value } = e.target

    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!")
      return
    }

    const { confirmPassword, ...rest } = formData
    const { status, message } = await registerUser(rest)

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

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      id="fName"
                      onChange={handleChange}
                      value={formData.fName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      id="lName"
                      onChange={handleChange}
                      value={formData.lName}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                      value={formData.username}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                      value={formData.password}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      id="confirmPassword"
                      onChange={handleChange}
                      value={formData.confirmPassword}
                    />
                  </FormGroup>
                  <Button className="btn secondary-btn auth-btn" type="submit">
                    Register
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
    </section>
  )
}
export default Register
