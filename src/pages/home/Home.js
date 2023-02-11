import { Col, Container, Row } from "reactstrap"
import "./home.scss"
import heroImg from "../../assets/images/hero-img01.jpg"
import heroImg2 from "../../assets/images/hero-img02.jpg"
import heroVideo from "../../assets/images/hero-video.mp4"
import worldImg from "../../assets/images/world.png"
import Subtitle from "../../components/Subtitle/Subtitle"
import SearchBar from "../../components/SearchBar/SearchBar"
import ServiceList from "../../components/Services/ServiceList"

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="hero-content">
                <div className="hero-subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="world" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight"> memories</span>
                </h1>

                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  aliquid cumque velit nulla inventore, sequi vitae nam
                  accusamus. Repellat eum fuga labore magni voluptatum doloribus
                  id! Nostrum nisi voluptatem velit!
                </p>
              </div>
            </Col>

            <Col lg={2}>
              <div className="hero-img-box">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero-img-box mt-4">
                <video src={heroVideo} alt="hero-video" controls />
              </div>
            </Col>
            <Col lg={2}>
              <div className="hero-img-box mt-5">
                <img src={heroImg2} alt="hero-img" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ======== hero section start ========= */}
      <section>
        <Container>
          <Row>
            <Col lg={3}>
              <h5 className="services-subtitle">Services we provide</h5>
              <h2 className="services-title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ========= Featured tour section start ======== */}
    </>
  )
}
export default Home
