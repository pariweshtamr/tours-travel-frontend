import "./header.scss"
import { Button, Container, Row } from "reactstrap"
import logo from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutSuccess } from "../../redux/Auth/AuthSlice"
const Header = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper d-flex align-items-center justify-content-between">
            {/* ======== logo start ========= */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            {/* ======== logo end ======== */}

            {/* ======== menu start ======== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
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
                      {user?.username}
                    </Button>
                    <Button
                      className="btn btn-dark rounded-5"
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(logoutSuccess())}
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

              <span className="mobile-menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}
export default Header
