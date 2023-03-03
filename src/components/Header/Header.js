import "./header.scss"
import { Button, Container, Row } from "react-bootstrap"
import logo from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutSuccess } from "../../redux/Auth/AuthSlice"
import { useState } from "react"
const Header = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [show, setShow] = useState(false)

  const handleLogout = () => {
    dispatch(logoutSuccess())
    localStorage.removeItem("refreshJwt")
    sessionStorage.removeItem("accessJwt")
  }

  return (
    <div className="header-bg">
      <header className="header">
        <Container>
          <Row>
            <div className="nav-wrapper d-flex align-items-center justify-content-between">
              {/* ======== logo start ========= */}
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              {/* ======== logo end ======== */}

              {/* ======== menu start ======== */}
              <div className={!show ? "navigation" : "mobile-navigation"}>
                <div
                  className="mobile-menu-close"
                  onClick={() => setShow(false)}
                >
                  <i className="ri-close-line"></i>
                </div>
                <ul
                  className={`${
                    !show ? "menu" : "mobile-menu"
                  } d-flex align-items-center gap-5`}
                >
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={(navClass) =>
                        navClass.isActive ? "active-link" : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about"
                      className={(navClass) =>
                        navClass.isActive ? "active-link" : ""
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/tours"
                      className={(navClass) =>
                        navClass.isActive ? "active-link" : ""
                      }
                    >
                      Tours
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* ======== menu end ======== */}

              <div className="nav-right d-flex align-items-center gap-4">
                <div className="nav-btns d-flex align-items-center gap-4">
                  {user?._id ? (
                    <>
                      <Button className="btn secondary-btn">
                        <Link to="/profile">{user?.username}</Link>
                      </Button>
                      <Button
                        className="btn btn-dark rounded-5"
                        style={{ cursor: "pointer" }}
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className="btn secondary-btn">
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button className="btn primary-btn">
                        <Link to="/register">Register</Link>
                      </Button>
                    </>
                  )}
                </div>

                <span className="mobile-menu" onClick={() => setShow(true)}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  )
}
export default Header
