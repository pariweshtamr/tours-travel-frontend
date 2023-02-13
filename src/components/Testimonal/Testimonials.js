import Slider from "react-slick"
import ava1 from "../../assets/images/ava-1.jpg"
import ava2 from "../../assets/images/ava-2.jpg"
import ava3 from "../../assets/images/ava-3.jpg"
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <div className="testimonial py- 4 px-3">
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsum
          repudiandae ad aliquid. Repudiandae consequuntur reprehenderit
          pariatur illo. Tempora odio nostrum quas repellendus vitae veritatis
          quam eaque atque, cupiditate ipsa.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava1} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py- 4 px-3">
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsum
          repudiandae ad aliquid. Repudiandae consequuntur reprehenderit
          pariatur illo. Tempora odio nostrum quas repellendus vitae veritatis
          quam eaque atque, cupiditate ipsa.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava2} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Sam Smith</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py- 4 px-3">
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsum
          repudiandae ad aliquid. Repudiandae consequuntur reprehenderit
          pariatur illo. Tempora odio nostrum quas repellendus vitae veritatis
          quam eaque atque, cupiditate ipsa.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} alt="avatar" className="w-25 h-25 rounded-2" />
          <div>
            <h5 className="mb-0 mt-3">Alexandra Martinez</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py- 4 px-3">
        <p className="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsum
          repudiandae ad aliquid. Repudiandae consequuntur reprehenderit
          pariatur illo. Tempora odio nostrum quas repellendus vitae veritatis
          quam eaque atque, cupiditate ipsa.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} alt="avatar" className="w-25 h-25 rounded-5-2" />
          <div>
            <h5 className="mb-0 mt-3">Lia Franklin</h5>
            <p>Customer</p>
            <p></p>
          </div>
        </div>
      </div>
    </Slider>
  )
}
export default Testimonials
