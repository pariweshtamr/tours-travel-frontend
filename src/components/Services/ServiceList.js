import ServiceCard from "./ServiceCard"
import "./serviceList.scss"
import weatherImg from "../../assets/images/weather.png"
import guideImg from "../../assets/images/guide.png"
import customImg from "../../assets/images/customization.png"
import { Col } from "reactstrap"

const servicesData = [
  {
    imgUrl: weatherImg,
    title: " Calculate Weather ",
    desc: " Lorem ipsum dolor sit amet , consectetur adipisicing elit . ",
  },
  {
    imgUrl: guideImg,
    title: " Best Tour Guide ",
    desc: " Lorem ipsum dolor sit amet , consectetur adipisicing elit . ",
  },
  {
    imgUrl: customImg,
    title: " Customization ",
    desc: " Lorem ipsum dolor sit amet , consectetur adipisicing elit . ",
  },
]
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, i) => (
        <Col lg={3} md={6} sm={12} key={i} className="mb-4">
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  )
}
export default ServiceList
