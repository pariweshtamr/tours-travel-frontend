import { Container } from "reactstrap"
import SearchBar from "../SearchBar/SearchBar"
import "./hero.scss"
const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <div className="hero">
          <h1 className="fw-bold text-light">
            Explore The Huge World & Enjoy It's Beauty
          </h1>
          <p>
            discover new things in exploring the world & make your vaction
            memorable to rememberf forever.
          </p>
          <div>
            <SearchBar />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Hero
