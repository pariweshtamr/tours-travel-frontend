import { Link } from "react-router-dom"
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap"
import "./login.scss"
import loginImg from "../../assets/images/login.png"
import userIcon from "../../assets/images/user.png"
import { useState } from "react"
const Login = () => {
  const [formData, setFormData] = useState({
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
                <img src={loginImg} alt="login-img" />
              </div>

              <div className="login-form">
                <div className="user">
                  <img src={userIcon} alt="user-icon" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleSubmit}>
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
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Login
