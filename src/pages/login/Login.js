import { Link, useNavigate } from "react-router-dom"
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap"
import "./login.scss"
import loginImg from "../../assets/images/login.png"
import userIcon from "../../assets/images/user.png"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from "../../redux/Auth/AuthAction"
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading } = useSelector((state) => state.auth)
  const [reveal, setReveal] = useState(false)
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
    dispatch(loginAction(formData))
  }

  useEffect(() => {
    user?._id && navigate("/")
  }, [user, navigate])
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

                <Form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-3"
                >
                  <Form.Group>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <div className="pw-input">
                      <input
                        type={reveal ? "text" : "password"}
                        placeholder="Password"
                        required
                        id="password"
                        onChange={handleChange}
                      />
                      {!reveal ? (
                        <i
                          className="ri-eye-line show-pw"
                          onClick={() => setReveal(true)}
                        ></i>
                      ) : (
                        <i
                          className="ri-eye-off-line show-pw"
                          onClick={() => setReveal(false)}
                        ></i>
                      )}
                    </div>
                  </Form.Group>
                  <Button
                    disabled={isLoading}
                    className="btn secondary-btn auth-btn"
                    type="submit"
                  >
                    {isLoading ? <Spinner animation="grow" /> : "Login"}
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to="/register">Register</Link>
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
