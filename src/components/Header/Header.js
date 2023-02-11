import "./header.scss"
import { Button, Container, Row } from "reactstrap"
import logo from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header className="header sticky-header">
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
                <Button className="btn secondary-btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary-btn">
                  <Link to="/register">Register</Link>
                </Button>
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
