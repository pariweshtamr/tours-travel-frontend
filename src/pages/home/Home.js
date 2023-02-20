import { Col, Container, Row } from "reactstrap"
import "./home.scss"
import heroImg from "../../assets/images/hero-img01.jpg"
import heroImg2 from "../../assets/images/hero-img02.jpg"
import heroVideo from "../../assets/images/hero-video.mp4"
import worldImg from "../../assets/images/world.png"
import experienceImg from "../../assets/images/experience.png"
import Subtitle from "../../components/Subtitle/Subtitle"
import SearchBar from "../../components/SearchBar/SearchBar"
import ServiceList from "../../components/Services/ServiceList"
import FeaturedTours from "../../components/FeaturedTours/FeaturedTours"
import MasonryImagesGallery from "../../components/ImageGallery/MasonryImagesGallery"
import Testimonials from "../../components/Testimonal/Testimonials"
import NewsLetter from "../../components/NewsLetter/NewsLetter"

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
              <div className="hero-img-box hero-video-box mt-4">
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
      {/* ======== Hero section start ========= */}
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
      {/* ========= Hero section end ======== */}

      {/* ========= Featured tour section start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg={12} className="mb-5">
              <Subtitle subtitle="Explore" />
              <h2 className="featured-tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTours />
          </Row>
        </Container>
      </section>
      {/* ========= Featured tour section end ======== */}

      {/* ========= Experience section start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="experience-content">
                <Subtitle subtitle="Experience" />
                <h2 className="">
                  With all our experience <br /> we will give you the <br />{" "}
                  best service
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Dolor tempora maiores nam molestiae praesentium, <br />{" "}
                  iure consequatur dicta reprehenderit aspernatur sapiente.
                </p>
              </div>

              <div className="counter-wrapper d-flex align-items-center gap-5">
                <div className="counter-box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter-box">
                  <span>2k+</span>
                  <h6>Regulat Clients</h6>
                </div>
                <div className="counter-box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="experience-img">
                <img src={experienceImg} alt="experience-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= Experience section end ======== */}

      {/* ========= Gallery section start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <Subtitle subtitle="Gallery" />
              <h2 className="gallery-title">
                Visit out customers tour gallery
              </h2>
            </Col>
            <Col lg={12}>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= Gallery section end ======== */}

      {/* ========= Testimonial section start ======== */}
      <section>
        <Container>
          <Row>
            <Col lg={12}>
              <Subtitle subtitle="Fans Love" />
              <h2 className="testimonial-title">What our fans say about us</h2>
            </Col>
            <Col lg={12}>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========= Testimonial section end ======== */}

      {/* ========= Newsletter section start ======== */}
      <NewsLetter />
      {/* ========= Newsletter section end ======== */}
    </>
  )
}
export default Home
