import { Link } from "react-router-dom"
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap"
import "../login/login.scss"
import regImg from "../../assets/images/register.png"
import userIcon from "../../assets/images/user.png"
import { useState } from "react"
const Register = () => {
  const [formData, setFormData] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  })

  const handleChange = (e) => {
    const { id, value } = e.target

    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
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
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary-btn auth-btn" type="submit">
                    Login
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
